<?php
require 'vendor/autoload.php';
if (isset($_POST["name"])&&isset($_POST["email"])&&isset($_POST["phone"])){

  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = "<h1>Thank you for scheduling your free estimate!</h1><p>Please click the following link to confirm your request and accept your promo code!</p><a href='http://Codefront.Design/ProfessionalPainters/php/activate.php'>Codefront.Design/ProfessionalPainters</p>";

  $mail = new PHPMailer();
  $notice = new PHPMailer();

  $mail->IsSMTP();
  $mail->SMTPDebug = 0;
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = 'tls';
  $mail->Host = "smtp.gmail.com";
  $mail->Port = 587;
  $mail->IsHTML(true);
  $mail->Username = "jordanelder10@gmail.com";
  $mail->Password = "mglkqlxoocgqpyth";
  $mail->SetFrom("jordanelder10@gmail.com");
  $mail->Subject = "Your Free Estimate Has Arived!";
  $mail->Body = $message;
  $mail->AddAddress($email);
  if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
    echo "Message has been sent";
  }

  $notice->IsSMTP();
  $notice->SMTPDebug = 0;
  $notice->SMTPAuth = true;
  $notice->SMTPSecure = 'tls';
  $notice->Host = "smtp.gmail.com";
  $notice->Port = 587;
  $notice->IsHTML(true);
  $notice->Username = "jordanelder10@gmail.com";
  $notice->Password = "mglkqlxoocgqpyth";
  $notice->SetFrom("jordanelder10@gmail.com");
  $notice->Subject = "You have a new client!";
  $notice->Body = $email." has signed up for the promotion!";
  $notice->AddAddress("jordanelder10@gmail.com");
  if(!$notice->Send()) {
    echo "Mailer Error: " . $notice->ErrorInfo;
  } else {
    echo "Notification has been sent";
  }
}
 ?>
