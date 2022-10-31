<?php
$nombre = $_POST['ayn'];
$mail = $_POST['mail'];
$comentarios = $_POST['comentario'];

$destinatario;
$asunto = "WEBMAIL - ";
$asunto .=  $nombre .' - ';
$asunto .=  $mail;

$respuesta = 'Mensaje enviado correctamente';

$destinatario = "ecometto@hotmail.com";



mail($destinatario,$asunto,$comentarios);



// "<script>
// alert('Mensaje enviado correctamente');
// </script>";

header("location:agradecimiento1.html");

// echo "<script>alert('Solicitud enviada correctamente. En breve nos contactaremos con Ud. ');
//      window.location='index.html';</script>";

?>