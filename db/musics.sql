DROP DATABASE IF EXISTS musicscheckpoint;
CREATE DATABASE musicscheckpoint;
USE musicscheckpoint;

CREATE TABLE `albums` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `genre` VARCHAR(255) NULL,
    `picture` VARCHAR(255) NULL,
    `artist` VARCHAR(255) NULL
);

CREATE TABLE `tracks` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(128) NULL,
    `youtube_url` VARCHAR(255) NULL,
    `id_album` INT NULL,
    FOREIGN KEY (id_album) REFERENCES albums(id)
);

INSERT INTO tracks 
(title, youtube_url, id_album)
VALUES 
('Another Brick In The Wall', 'https://www.youtube.com/watch?v=YR5ApYxkU-U', 1);

INSERT INTO albums 
(title, genre, picture, artist)
VALUES 
('The Dark Side of the Moon','Rock', 'https://images-na.ssl-images-amazon.com/images/I/41QfcId32%2BL._SY355_.jpg', 'Pink Floyd');

