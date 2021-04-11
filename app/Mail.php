<?php
$bdd = new PDO('mysql:host=localhost;dbname=emma-laprevote_mysite;charset=utf8', 'emma-laprevote', 'Hpgbcu-13');

        if(empty($_POST['nom']) || empty($_POST['prenom']) || empty($_POST['email']) || empty($_POST['object']) || empty($_POST['message'])){
            echo 'wrong';
        }

        else {
            $nom = htmlspecialchars(trim($_POST['nom']));
            $prenom = htmlspecialchars(trim($_POST['prenom']));
            $email = htmlspecialchars(trim($_POST['email']));
            $object = htmlspecialchars(trim($_POST['object']));
            $message = htmlspecialchars(trim($_POST['message']));


            $req = $bdd->prepare("INSERT INTO message (nom, prenom, email, object, message) VALUES (:nom, :prenom, :email, :object, :message)");
            $req->bindValue(':nom', $nom, PDO::PARAM_STR);
            $req->bindValue(':prenom', $prenom, PDO::PARAM_STR);
            $req->bindValue(':email', $email, PDO::PARAM_STR);
            $req->bindValue(':object', $object, PDO::PARAM_STR);
            $req->bindValue(':message', $message, PDO::PARAM_STR);
            $req->execute();
             echo "succes";

        }
