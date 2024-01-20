<?php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

$username = $_POST['username'];
$password = $_POST['password'];

$con = new mysqli("localhost", "root", "", "signup_db");
if ($con->connect_error) {
    die("Failed to connect: " . $con->connect_error);
} else {
    $stmt = $con->prepare("SELECT * FROM users WHERE username = ?");
    if ($stmt === false) {
        die('Error in SQL query: ' . $con->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    if ($stmt_result->num_rows > 0) {
        $data = $stmt_result->fetch_assoc();
        if (password_verify($password, $data['password'])) {
            // Login successful, redirect to index.php
            header("Location: /finals/act 4/act3/index.php");
            exit();
        } else {
            header("Location: /finals/act 4/act3/index.php");
        }
    } else {
        header("Location: /finals/act 4/act3/index.php");
    }

    $stmt->close();
    $con->close();
}
?>
