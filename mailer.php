<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    # Sender Data
    $name    = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["full-name"])));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone   = $_POST["phone-number"];
    $subject = $_POST["subject"];
    $budget  = $_POST["budget"];
    $message = trim($_POST["message"]);
    
    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($message)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    try {
        $mail = new PHPMailer(true);
        
        // Google Workspace SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->AuthType = 'LOGIN';
        $mail->Username = 'hello@amineboularbah.com';
        $mail->Password = 'mzwc ggmv fgki wqme';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        // Force TLS encryption
        $mail->SMTPSecure = 'tls';
        
        // Additional security settings
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => true,
                'verify_peer_name' => true,
                'allow_self_signed' => false
            )
        );

        // Recipients
        $mail->setFrom('hello@amineboularbah.com', 'Portfolio Contact Form');
        $mail->addAddress('hello@amineboularbah.com', 'Amine Boularbah');
        $mail->addCC('amine@amineboularbah.com', 'Amine Boularbah');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = "New Contact Form Message: $subject";
        
        // Mail Content
        $htmlContent = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Budget:</strong> $budget</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
        
        $mail->Body = $htmlContent;
        $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nBudget: $budget\n\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Thank you! Your message has been sent successfully. I'll get back to you soon.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Sorry, we couldn't send your message. Please try again later.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
