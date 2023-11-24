from flask import Flask
import fastf1

app = Flask(__name__)

@app.route("/api/healthcheck", methods=["GET"])
def healthcheck():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/api/racecalendar", methods=["GET"])
def racecalendar():
    event_schedule = fastf1.get_event_schedule(2023)
    parsed_schedule = event_schedule.iloc[1:][['RoundNumber', 'EventName']]

    # app.logger.warn(parsed_schedule.to_json(orient="records"))

    return parsed_schedule.to_json(orient="records")

if __name__ == "__main__":
    app.run()
