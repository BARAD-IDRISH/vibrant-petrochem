<?php
// ====================================================================
// Vibrant Petrochem FZE - PHP Native Email Handler for A2 Hosting
// ====================================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Invalid JSON payload']);
    exit;
}

$fullName = isset($data['fullName']) ? strip_tags($data['fullName']) : 'N/A';
$companyName = isset($data['companyName']) ? strip_tags($data['companyName']) : 'N/A';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : 'N/A';
$phone = isset($data['phone']) ? strip_tags($data['phone']) : 'N/A';
$productInterest = isset($data['productInterest']) ? strip_tags($data['productInterest']) : 'N/A';
$estimatedVolume = isset($data['estimatedVolume']) ? strip_tags($data['estimatedVolume']) : 'N/A';
$destinationPort = isset($data['destinationPort']) ? strip_tags($data['destinationPort']) : 'N/A';
$message = isset($data['message']) ? strip_tags($data['message']) : 'N/A';

$to = 'ashish@vibrantpetro.com';
$subject = "New Inquiry / Quote Request from $fullName ($companyName)";

$body = "New Inquiry Details from Vibrant Petrochem Portal:\n\n";
$body .= "Full Name: $fullName\n";
$body .= "Company Name: $companyName\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Product Interest: $productInterest\n";
$body .= "Estimated Volume: $estimatedVolume\n";
$body .= "Destination Port: $destinationPort\n\n";
$body .= "Additional Message / Specifications:\n$message\n\n";
$body .= "---\nSent from Vibrant Petrochem FZE Website";

$headers = "From: web-inquiry@vibrantpetro.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email dispatched successfully']);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to dispatch email']);
}
?>
