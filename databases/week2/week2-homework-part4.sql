-- Part 4: Creating a database

CREATE DATABASE LibraryDB;
USE LibraryDB;

CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn VARCHAR(20),
    published_year INT
);