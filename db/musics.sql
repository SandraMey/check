DROP DATABASE IF EXISTS musicscheckpoint;
CREATE DATABASE musicscheckpoint;
USE musicscheckpoint;

CREATE TABLE `tracks` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(128) NULL,
    `youtube_url` VARCHAR(255) NULL,
    `id_album` INT NOT NULL,
    FOREIGN KEY (id_album) REFERENCES albums(id)

);

CREATE TABLE `albums` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `genre` VARCHAR(255) NULL,
    `picture` VARCHAR(255) NULL,
    `artist` VARCHAR(255) NULL
);