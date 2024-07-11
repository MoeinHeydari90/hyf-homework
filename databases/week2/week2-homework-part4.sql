-- Part 4: Creating a database

CREATE DATABASE LibraryDB;
USE LibraryDB;


DROP TABLE IF EXISTS books;
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn VARCHAR(20),
    published_year INT
);


DROP TABLE IF EXISTS genres;
CREATE TABLE genres (
    genre_id INT PRIMARY KEY,
    genre_name VARCHAR(100) NOT NULL
);


DROP TABLE IF EXISTS members;
CREATE TABLE members (
    member_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    membership_date DATE NOT NULL,
    email VARCHAR(100) NOT NULL
);


DROP TABLE IF EXISTS borrowing_log;
CREATE TABLE borrowing_log (
    borrow_id INT PRIMARY KEY,
    book_id INT,
    member_id INT,
    borrow_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);


DROP TABLE IF EXISTS book_genres;
CREATE TABLE book_genres (
    book_id INT,
    genre_id INT,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);