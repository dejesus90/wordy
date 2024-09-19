<?php
   require 'vendor/autoload.php';
   use PHPMailer\PHPMailer\PHPMailer;
   $mail = new PHPMailer;
   $mail->isSMTP();
   $mail->SMTPDebug = 0;
   $mail->Host = 'smtp.hostinger.com';
   $mail->Port = 587;
   $mail->SMTPAuth = true;
   $mail->Username = 'contacto@wordy.com.mx';
   $mail->Password = 'claseIngles2024?';
   $mail->setFrom('contacto@wordy.com.mx', 'wordy');
   $mail->addReplyTo('contacto@wordy.com.mx', 'wordy');
   $mail->addAddress('contacto@wordy.com.mx', 'Infomracion Clases');
   $mail->Subject = 'Informacion Clases';
   $mail->isHTML(true);
    //    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
   $htmlMjs = '<b>Tienes un nuevo mensaje desde la pagina web</b><br>';
   $htmlMjs = $htmlMjs.'Nombre : '.$_POST['nombre'].' '.$_POST['apellidos'].'<br>';
   $htmlMjs = $htmlMjs.'Telefono : '.$_POST['telefono'].'<br>';
   $htmlMjs = $htmlMjs.'email : '.$_POST['email'].'<br>';
   $htmlMjs = $htmlMjs.'Mensaje : '.$_POST['mensaje'].'<br>';
   $mail->Body = $htmlMjs;
   //$mail->addAttachment('attachment.txt');
   
   if (!$mail->send()) {
        header("Location: https://wordy.com.mx/contacto");
        // echo 'Mailer Error: ' . $mail->ErrorInfo;
        die();
   } else {
        header("Location: https://wordy.com.mx/contacto");
       echo 'Mensaje enviado correctamente.';
       die();
   }
?>