from datetime import datetime
from flask import Flask
import fastf1
import pandas as pd


app = Flask(__name__)

@app.route("/api/healthcheck", methods=["GET"])
def healthcheck():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

# Get the race calendar for a given year
@app.route("/api/calendar/<year>", methods=["GET"])
def get_calendar(year):
    event_schedule = fastf1.get_event_schedule(int(year))
    if event_schedule.empty:
        app.logger.warn("this frame is empty")
        return []

    current_date = pd.Timestamp.now(tz='US/Pacific')

    for i, row in event_schedule.iterrows():
        event_date = row['EventDate'].tz_localize('US/Pacific')
        has_event_completed = event_date < current_date
        event_schedule.at[i, 'HasEventCompleted'] = has_event_completed

    parsed_schedule = event_schedule.iloc[1:][['RoundNumber', 'EventName', 'HasEventCompleted']]
    return parsed_schedule.to_json(orient="records")

# Get info for the remaining races in the calendar
@app.route("/api/remainingevents", methods=["GET"])
def get_remaining_events():
    remaining_events = fastf1.get_events_remaining(datetime(2023, 10, 22))

    # Only return the next four races for the landing page
    # Can update later to return all if we need
    return remaining_events.iloc[:4].to_json(orient="records")

# Get the info and schedule for a given race weekend
@app.route("/api/events/<race_round>", methods=["GET"])
def get_event(race_round):
    event_schedule = fastf1.get_event_schedule(2023)

    fields = ['EventName', 'Location', 'Country']
    current_event = event_schedule.iloc[int(race_round)]

    return current_event.to_json()

# Get the results from the qualifying session of the given race weekend
@app.route("/api/qualifying/<race_round>", methods=["GET"])
def get_qualifying_results(race_round):
    round = int(race_round)

    # TODO: return early if qual hasn't happened yet to avoid unnecessary API calls
    qual_session = fastf1.get_session(2023, round, 'Qualifying')
    qual_session.load(laps=False, telemetry=False, weather=False, messages=False)

    fields = ['DriverNumber', 'Abbreviation', 'FullName', 'ClassifiedPosition']
    pole_position = qual_session.results.iloc[0][fields]

    return pole_position.to_json()

# Get the results from the race session of the given race weekend
@app.route("/api/races/<race_round>", methods=["GET"])
def get_race_info(race_round):
    round = int(race_round)

    # TODO: return early if race hasn't happened yet to avoid unnecessary API calls
    race_session = fastf1.get_session(2023, round, 'Race')
    race_session.load(laps=False, telemetry=False, weather=False, messages=False)

    fields = ['DriverNumber', 'Abbreviation', 'FullName', 'ClassifiedPosition']
    race_podium = race_session.results.iloc[:3][fields]

    return race_podium.to_json(orient="records")

def localize_datetime(date):
    app.logger.warning(date)
    return date.tz_convert('US/Pacific')

if __name__ == "__main__":
    app.run()
