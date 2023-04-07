<?php
// Configurar las credenciales de la API de Mailtrap
$username = '431238379b0986';
$password = '5ce528161137e1';
$inbox_id = '1680829286';
 
// Configurar la URL de la API de Mailtrap
$url = "https://mailtrap.io/api/v1/inboxes/$inbox_id/messages";

// Configurar los datos del correo electrónico a enviar
$data = array(
    "from_email" => "practica.transparencia06@gmail.com",
    "to_email" => "hector.valencia0605@g",
    "subject" => "Prueba de correo electrónico usando Mailtrap y PHP puro",
    "html_body" => "<p>Este es un mensaje de prueba enviado desde PHP puro usando Mailtrap.</p>"
);

// Configurar las opciones de la solicitud HTTP
$options = array(
    'http' => array(
        'header'  => "Content-type: application/json\r\nAuthorization: Basic " . "1d56cbb21d469a101c2a2b9d594414d4",
        'method'  => 'POST',
        'content' => json_encode($data),
    ),
);

// Crear el contexto de la solicitud HTTP y enviarla
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

// Verificar si la solicitud se ha realizado correctamente
if ($result !== false) {
    echo 'El correo electrónico ha sido enviado';
} else {
    echo 'Error al enviar el correo electrónico';
}
?>
