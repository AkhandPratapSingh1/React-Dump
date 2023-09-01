from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
from flask_cors import CORS
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Database configuration
db = mysql.connector.connect(
    host="89.117.27.154",
    user="u918582213_akhand",
    password="Robo@010",
    database="u918582213_form"
)
cursor = db.cursor()
@app.route('/show')
def index():
    # Fetch data from the mlDump table (assuming this is your table name)
    cursor.execute("SELECT id, Name, Inserted_Date, Status FROM mlDump")
    data = cursor.fetchall()
    return jsonify(data)  # Import 'jsonify' from flask and use it here


# @app.route('/show')
# def index():
#     # Fetch data from the main_data table
#     cursor.execute("SELECT id, Name, Inserted_Date, Status FROM mlDump")
#     data = cursor.fetchall()
#     return render_template('index.html', data=data)

@app.route('/case/<int:case_id>')
def case_detail(case_id):
    # Fetch data for the selected case
    cursor.execute("SELECT * FROM main_data WHERE case = %s", (case_id,))
    case_data = cursor.fetchone()
    return render_template('detail.html', case_data=case_data)

@app.route('/approve/<int:case_id>')
def approve_case(case_id):
    # Move data from main_data to approved_data table and update status
    cursor.execute("INSERT INTO approved_data SELECT * FROM main_data WHERE case = %s", (case_id,))
    cursor.execute("DELETE FROM main_data WHERE case = %s", (case_id,))
    db.commit()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
