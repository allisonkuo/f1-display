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

@app.route("/api/qualifying/<race_round>", methods=["GET"])
def get_qualifying_results(race_round):
    round = int(race_round)

    # TODO: return early if qual hasn't happened yet to avoid unnecessary API calls
    qual_session = fastf1.get_session(2023, round, 'Qualifying')
    qual_session.load(laps=False, telemetry=False, weather=False, messages=False)

    fields = ['DriverNumber', 'Abbreviation', 'FullName', 'ClassifiedPosition']
    pole_position = qual_session.results.iloc[0][fields]

    return pole_position.to_json()

@app.route("/api/race/<race_round>", methods=["GET"])
def get_race_info(race_round):
    round = int(race_round)

    # TODO: return early if race hasn't happened yet to avoid unnecessary API calls
    race_session = fastf1.get_session(2023, round, 'Race')
    race_session.load(laps=False, telemetry=False, weather=False, messages=False)

    fields = ['DriverNumber', 'Abbreviation', 'FullName', 'ClassifiedPosition']
    race_podium = race_session.results.iloc[:3][fields]

    return race_podium.to_json(orient="records")


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
