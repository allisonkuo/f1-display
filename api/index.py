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

if __name__ == "__main__":
    app.run()
