<?php
if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $telefon = $_POST['telefon'];
    $message = $_POST['message'];


    $to = 'rajinovacmanastir@gmail.com';
    $subject = 'Contact form';
    $body = "Ime: $name\r\n\nPrezime: $surname\n\nE-mail: $email\n\nTelefon: $telefon\n\nPoruka: $message";

// More headers
    $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
    if (mail($to, $subject, $body, $headers)) {
        $result = true;
    }

}
include 'index.html';
?>
