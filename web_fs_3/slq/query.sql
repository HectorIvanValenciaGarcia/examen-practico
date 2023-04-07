CREATE DATABASE viajes;

use viajes;


CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  celular VARCHAR(20) NOT NULL
);

CREATE TABLE viaje (
  id INT AUTO_INCREMENT PRIMARY KEY,
  salida VARCHAR(50) NOT NULL,
  destino VARCHAR(50) NOT NULL,
  servicio VARCHAR(20) NOT NULL,
  horario TIME NOT NULL,
  precio DECIMAL(10, 2) NOT NULL,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

 DELIMITER //

CREATE PROCEDURE insertar_usuario_y_viaje(IN nombre VARCHAR(50), IN email VARCHAR(50), IN celular VARCHAR(20), IN salida VARCHAR(50), IN destino VARCHAR(50), IN servicio VARCHAR(20), IN horario TIME, IN precio DECIMAL(10, 2))
BEGIN
    DECLARE id_usuario INT;

    -- Insertar nuevo usuario
    INSERT INTO usuario (nombre, email, celular) VALUES (nombre, email, celular);

    -- Obtener el ID del usuario recién insertado
    SET id_usuario = LAST_INSERT_ID();

    -- Insertar nuevo viaje con el ID del usuario recién insertado
    INSERT INTO viaje (salida, destino, servicio, horario, precio, id_usuario) VALUES (salida, destino, servicio, horario, precio, id_usuario);
END 
//

DELIMITER ;

