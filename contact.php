<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and trim data
    $name = trim($_POST["name"]);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // --- NEW VALIDATION BLOCK ---
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // If any field is empty or email is invalid, stop the script
        http_response_code(400);
        echo "<h1>Error</h1><p>Please fill out all fields correctly.</p>";
        exit;
    }
    // ----------------------------

    $recipient = "khamna5400@gmail.com";
    $subject = "New Contact from $name";
    $email_content = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";
    $email_headers = "From: $email";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "<h1>Success!</h1><p>Message sent.</p>";
    } else {
        echo "<h1>Error</h1><p>Server failed to send email.</p>";
    }
}
?>