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
            $mail->SMTPDebug = 2;
            $mail->Mailer = "smtp";
            $mail->Host = "localhost";
            $mail->Port = 587;
            $mail->SMTPAuth = true; // turn on SMTP authentication
            $mail->Username = "emma.laprevote@laplateforme.io"; // SMTP username
            $mail->Password = "4DacYAZ2"; // SMTP password
            $Mail->Priority = 1;                                    //Send using SMTP

            //Recipients
            $mail->setFrom($email);
            $mail->addAddress('emma.laprevote@laplateforme.io', 'CONTACT EMKA');     //Add a recipient


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
