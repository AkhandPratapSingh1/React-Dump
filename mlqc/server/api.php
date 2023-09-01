<?php
// Connect to the MySQL database
$host = "89.117.27.154";
$username = "u918582213_akhand";
$password = "Robo@010";
$database = "u918582213_form";
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Enable CORS (for development purposes)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

// Fetch data from the mlDump table
$result = $conn->query("SELECT id, Name, Inserted_Date, Status FROM mlDump");
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Return JSON response
header("Content-Type: application/json");
echo json_encode($data);

// Close the database connection
$conn->close();
?>
