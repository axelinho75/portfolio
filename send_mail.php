<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email de destination
    $to = "axel.flahaut@ecoles-epsi.net"; // Remplacez par votre adresse email
    $subject = "Nouveau message de contact de $name";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Échec de l'envoi du message.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>