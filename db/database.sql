CREATE DATABASE pdf;
use pdf;

CREATE TABLE usuarios(
	id int unsigned PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(255) NOT NULL,
    apellido varchar(255) NOT NULL,
    correo varchar(255) NOT NULL UNIQUE,
    clave varchar(255) NOT NULL
);

CREATE TABLE archivos(
    id int unsigned PRIMARY KEY AUTO_INCREMENT,
    id_usuario int unsigned,
    documento varchar(255) NOT NULL,
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);
