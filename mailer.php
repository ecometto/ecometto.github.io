<?php 
// require(“class.phpmailer.php”);
// require(“class.smtp.php”);

// $mail = new PHPMailer();
// $mail->IsSMTP();                                      // Establecer envío SMTP
// $mail->Host = “mail.ecometto.com”;  // Especificar el servidor principal y de respaldo
// $mail->SMTPAuth = true;     // Activar la autenticación SMTP
// $mail->Username = “ecometto@ecometto.com.ar”;  // SMTP nombre de usuario
// $mail->Password = “Edgardo1980....”; // SMTP contraseña


// //datos del correo
// $nombre = $_POST['ayn'];
// $mail = $_POST['mail'];
// $comentarios = $_POST['comentario'];
// $destinatario = "ecometto@hotmail.com";


// $mail->From = $mail;
// $mail->FromName = $nombre;
// $mail->AddAddress(“ecometto@ecometto.comm.ar”, “Edgardo Cometto”);        // opcional
// //$mail->AddReplyTo(“info@ejemplo.com”, “Información”);

// $mail->WordWrap = 50;
// $mail->IsHTML(true);                                  // Formato de correo electrónico listo para HTML

// $mail->Subject = “Mail from ecometto.com.ar”;
// $mail->Body    = $comentarios;
// $mail->AltBody = “Este es el cuerpo de texto sin formato para los clientes de correo no HTML”;

// if(!$mail->Send())
// {
// echo “El mensaje no se ha podido enviar. <p>”;
// echo “Error: ” . $mail->ErrorInfo .". Intentelo mas tarde";
// exit;
// }

// echo “Mensaje envíado correctamente”;



require("class.phpmailer.php");
require("class.smtp.php");

//datos del correo
$nombre = $_POST['ayn'];
$email = $_POST['mail'];
$comentarios = $_POST['comentario'];
$destinatario = "ecometto@hotmail.com";

// configuraciones del servidor
$mail = new PHPMailer();
$mail->isSMTP();

$mail->Host = "mail.ecometto.com.ar";
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->SMTPSecure = true;

$mail->Username = 'test@ecometto.com.ar';
$mail->Password = 'YTcdMj+Zn1Gz';

$mail->From = 'test@ecometto.com.ar';
$mail->FromName = $nombre;
$mail->AddAddress('ecometto@hotmail.com', "destinatario");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject = "NEW - Mail from ecometto.com.ar - $nombre - $email";
$mail->Body    = $_POST['comentario'];

$mail->SMTPOptions = array(
'ssl' => array(
'verify_peer' => false,
'verify_peer_name' => false,
'allow_self_signed' => true
)
);


if(!$mail->Send())

{
   echo "Error al enviar. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "<a href='https://ecometto.com.ar/new'>Mensaje enviado correctamente. <br>Volver..</a>";

