<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $to = "aown02322@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];

    $body = "Name: " . $_POST['name'] . "\n";
    $body .= "Email: " . $_POST['email'] . "\n";
    $body .= "Message: \n" . $_POST['message'] . "\n";

    if(mail($to, $subject, $body, $headers)){
        echo "Message sent successfully.";
    } else {
        echo "Failed to send the message.";
    }
}
?>
