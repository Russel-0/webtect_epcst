<?php

$servername = "your_server_name"; // Replace with your server name
$username = "your_username";       // Replace with your database username
$password = "your_password";       // Replace with your database password
$dbname = "your_database_name";    // Replace with your database name


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
