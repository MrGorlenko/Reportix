<?php 

$receiver = "info@thereportix.com";


$name = htmlspecialchars(trim($_POST["name"]));
$email = htmlspecialchars(trim($_POST["email"]));
$letter = htmlspecialchars(trim($_POST["letter"]));
$pagetitle = "Reportix message!";


$message = "Name: $name \n E-mail: $email \n Message: $letter";

mail($receiver, $pagetitle,  $message, "Content-type: text/html; charset=\"utf-8\"\n From: $email");