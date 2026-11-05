CREATE DATABASE IF NOT EXISTS agence_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE agence_db;

CREATE TABLE clients (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telephone VARCHAR(20) DEFAULT NULL,
    message TEXT DEFAULT NULL,
    date_inscription TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
) ENGINE=InnoDB
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;