const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'your_database',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});

app.use(bodyParser.json());

// API endpoint for inserting data
app.post('/insert', (req, res) => {
  const dataToInsert = req.body.data;
  const status = req.body.status;

  // Insert the data into the database
  const query = 'INSERT INTO ApprovedCases SET ?';

  db.query(query, dataToInsert, (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).json({ message: 'Error inserting data' });
      return;
    }

    console.log('Data inserted into the database with ID: ' + result.insertId);

    // You can perform additional logic here based on the status

    res.status(200).json({ message: 'Data inserted successfully' });
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
