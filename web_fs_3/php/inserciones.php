<?php

$nombre = $_POST['nombre'];
$email =  $_POST['email'];
$celular = $_POST['celular'];
$salida = $_POST['salida'];
$destino = $_POST['destino'];
$servicio = $_POST['servicio'];
$horario = $_POST['hora'];
$precio = $_POST['precio'];
 

// Conexión a la base de datos
//$conexion = mysqli_connect("sql903.main-hosting.eu", "prueba", "Pa9:jQ$s$B~M", "u734903000_viajes");
$conexion = mysqli_connect("localhost", "root", "", "viajes");

 // Llamada al procedimiento almacenado para insertar datos en la tabla "usuario" y "viaje"
$resultado =mysqli_query($conexion, "CALL insertar_usuario_y_viaje('$nombre', '$email', '$celular', '$salida', '$destino', '$servicio', '$horario', '$precio')");

// Verificar si la inserción se realizó correctamente
if ($resultado) {
    // Devolver un JSON con un mensaje de éxito
    
    echo json_encode(['status' => 'success', 'message' => 'La inserción se realizó correctamente.']);
} else {
    // Devolver un JSON con un mensaje de error
    echo json_encode(['status' => 'error', 'message' => 'Ocurrió un error al realizar la inserción.']);
}


// Cerrar la conexión a la base de datos
mysqli_close($conexion);

?>
