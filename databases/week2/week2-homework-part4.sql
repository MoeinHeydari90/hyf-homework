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


DROP TABLE IF EXISTS book_reservations;
CREATE TABLE book_reservations (
    book_id INT,
    member_id INT,
    reservation_date DATE NOT NULL,
    PRIMARY KEY (book_id, member_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (member_id) REFERENCES members(member_id)
);


-- Insert data


INSERT INTO books (book_id, title, author, isbn, published_year) VALUES
(1, 'Dune', 'Frank Herbert', '978-0441172719', 1965),
(2, 'The Hobbit', 'J.R.R. Tolkien', '978-0547928227', 1937),
(3, 'The Hound of the Baskervilles', 'Arthur Conan Doyle', '978-1505255607', 1902),
(4, 'Pride and Prejudice', 'Jane Austen', '978-1503290563', 1813);


INSERT INTO genres (genre_id, genre_name) VALUES
(1, 'Science Fiction'),
(2, 'Fantasy'),
(3, 'Mystery'),
(4, 'Romance');


INSERT INTO members (member_id, first_name, last_name, membership_date, email) VALUES
(1, 'Alice', 'Smith', '2020-01-15', 'alice.smith@example.com'),
(2, 'Bob', 'Johnson', '2021-03-22', 'bob.johnson@example.com'),
(3, 'Carol', 'Williams', '2019-06-10', 'carol.williams@example.com');


INSERT INTO borrowing_log (borrow_id, book_id, member_id, borrow_date, return_date) VALUES
(1, 1, 1, '2024-06-01', '2024-06-15'),
(2, 2, 2, '2024-06-05', '2024-06-20'),
(3, 3, 3, '2024-07-10', NULL);


INSERT INTO book_genres (book_id, genre_id) VALUES
(1, 1), -- Dune is Science Fiction
(2, 2), -- The Hobbit is Fantasy
(3, 3), -- The Hound of the Baskervilles is Mystery
(4, 4); -- Pride and Prejudice is Romance


INSERT INTO book_reservations (book_id, member_id, reservation_date) VALUES
(1, 2, '2024-05-25'), -- Bob reserved Dune
(2, 1, '2024-05-30'), -- Alice reserved The Hobbit
(3, 2, '2024-06-01'), -- Bob reserved The Hound of the Baskervilles
(4, 3, '2024-06-15'); -- Carol reserved Pride and Prejudice
