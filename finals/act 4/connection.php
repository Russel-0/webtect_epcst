<?php 

$fullName = $_POST['fullName'];
$username = $_POST['username'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'signup_db');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO users (fullName, username, password) VALUES (?, ?, ?)");

    if ($stmt === false) {
        die('Error in SQL query: ' . $conn->error);
    }

    $stmt->bind_param("sss", $fullName, $username, $password);

    if ($stmt->execute() === false) {
        die('Error executing statement: ' . $stmt->error);
    }

    echo "Registration successfully";
    
    $stmt->close();
    $conn->close();
}

?>
