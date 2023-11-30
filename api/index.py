from datetime import date
from flask import Flask
import fastf1
import pandas as pd


app = Flask(__name__)

@app.route("/api/healthcheck", methods=["GET"])
def healthcheck():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/api/racecalendar", methods=["GET"])
def get_race_calendar():
    event_schedule = fastf1.get_event_schedule(2023)

    current_date = pd.Timestamp.now(tz='US/Pacific')

    for i, row in event_schedule.iterrows():
        event_date = row['EventDate'].tz_localize('US/Pacific')
        has_event_completed = event_date < current_date
        event_schedule.at[i, 'HasEventCompleted'] = has_event_completed

    parsed_schedule = event_schedule.iloc[1:][['RoundNumber', 'EventName', 'HasEventCompleted']]
    return parsed_schedule.to_json(orient="records")

@app.route("/api/raceinfo/<race_round>", methods=["GET"])
def get_race_info(race_round):
    round = int(race_round)
    # event_schedule = fastf1.get_event_schedule(2023)
    race_event = fastf1.get_event(2023, round)

    qual_session = race_event.get_qualifying()
    qual_session.load()

    race_session = race_event.get_race()
    race_session.load()

    fields = ['DriverNumber', 'Abbreviation', 'FullName', 'ClassifiedPosition']
    pole_position = qual_session.results.iloc[0][fields]
    race_podium = race_session.results.iloc[:3][fields]

    # race_schedule = event_schedule.iloc[round]

    return {
        "pole": pole_position.to_json(),
        "podium": race_podium.to_json(orient="records"),
    }

@app.route("/api/raceschedule/<race_round>", methods=["GET"])
def get_race_schedule(race_round):
    event_schedule = fastf1.get_event_schedule(2023)
    race_schedule = event_schedule.iloc[int(race_round)]

    return { "data": race_schedule.to_json() }


    

def localize_datetime(date):
    app.logger.warning(date)
    return date.tz_convert('US/Pacific')

if __name__ == "__main__":
    app.run()
