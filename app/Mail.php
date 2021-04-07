<?php

require_once '../vendor/autoload.php';
use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\Exception;
use \PHPMailer\PHPMailer\SMTP;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';


        if(empty($_POST['nom']) && empty($_POST['prenom']) && empty($_POST['mail']) && empty($_POST['objet']) && empty($_POST['message'])){
            echo 'wrong';
        }

        else {
            $nom = htmlspecialchars(trim($_POST['nom']));
            $prenom = htmlspecialchars(trim($_POST['prenom']));
            $email = htmlspecialchars(trim($_POST['email']));
            $object = htmlspecialchars(trim($_POST['object']));
            $message = htmlspecialchars(trim($_POST['message']));


            $mail = new PHPMailer(true);

            //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth = true;                                   //Enable SMTP authentication
            $mail->Username = 'laprevote.emma@gmail.com';                     //SMTP username
            $mail->Password = 'lkanizmbebajdkmn';                               //SMTP password
            $mail->SMTPSecure = 'ssl';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port = 465;                                  //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom('laprevote.emma@gmail.com', 'CONTACT EMKA');
            $mail->addAddress('emma.laprevote@laplateforme.io');     //Add a recipient


            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'CONTACT - EMKA SITE PERSO';
            $mail->Body = '<div>
                              <span><b>Nom</b> : '.$nom.'</span><br>
                              <span><b>Prenom</b> : '.$prenom.'</span><br>
                              <span><b>Email</b> : '.$email.'</span><br>
                              <span><b>Email</b> : '.$object.'</span><br>
                              <span><b>Message</b> : '.$message.'</span>
                          </div>';

            $mail->send();
             echo "succes";

        }
