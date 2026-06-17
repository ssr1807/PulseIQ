from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from routes.enterprise_routes import enterprise_bp
load_dotenv()
app = Flask(__name__)

CORS(app)

app.register_blueprint(enterprise_bp)

if __name__ == "__main__":
    app.run(debug=True)