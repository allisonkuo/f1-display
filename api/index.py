from flask import Flask

app = Flask(__name__)

@app.route("/api/healthcheck", methods=["GET"])
def healthcheck():
    return {"status": "success", "message": "Integrate Flask Framework with Next.js"}

@app.route("/api/raceschedule", methods=["GET"])
def raceschedule():
    return {"test": "ok"}

if __name__ == "__main__":
    app.run()
