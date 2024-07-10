-- Part 2: School database

CREATE DATABASE SchoolDB;
USE SchoolDB;


CREATE TABLE class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL
);


CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id)
);
