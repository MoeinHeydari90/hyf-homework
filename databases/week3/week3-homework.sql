-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/README.md#homework


CREATE DATABASE MealSharingDB;
USE MealSharingDB;


-- Create all the sql for creating this data model: https://dbdiagram.io/d/5f0460690425da461f045a29


CREATE TABLE Meal (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL(8, 2),
    created_date DATE
);


CREATE TABLE Reservation (
    id INT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(20),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


CREATE TABLE Review (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id INT,
    stars INT CHECK (stars BETWEEN 1 AND 5),
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES Meal(id)
);


-- Insert data


INSERT INTO Meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES
(1, 'Italian Dinner', 'A delightful evening with Italian cuisine.', 'Copenhagen', '2024-07-20 19:00:00', 20, 50.00, '2024-07-10'),
(2, 'Sushi Night', 'An authentic sushi experience.', 'Aarhus', '2024-07-21 18:30:00', 15, 70.00, '2024-07-11'),
(3, 'BBQ Feast', 'A fun BBQ event with a variety of grilled meats.', 'Odense', '2024-07-22 17:00:00', 30, 40.00, '2024-07-12'),
(4, 'Vegan Delight', 'A healthy and delicious vegan meal.', 'Aalborg', '2024-07-23 18:00:00', 25, 35.00, '2024-07-13'),
(5, 'French Cuisine', 'An evening with exquisite French dishes.', 'Esbjerg', '2024-07-24 20:00:00', 10, 90.00, '2024-07-14');


INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(1, 2, 1, '2024-07-15', '1234567890', 'John Doe', 'john.doe@example.com'),
(2, 4, 2, '2024-07-15', '2345678901', 'Jane Smith', 'jane.smith@example.com'),
(3, 1, 3, '2024-07-15', '3456789012', 'Alice Johnson', 'alice.johnson@example.com'),
(4, 3, 4, '2024-07-16', '4567890123', 'Bob Brown', 'bob.brown@example.com'),
(5, 5, 5, '2024-07-16', '5678901234', 'Charlie Davis', 'charlie.davis@example.com');


INSERT INTO Review (id, title, description, meal_id, stars, created_date) VALUES
(1, 'Amazing Dinner', 'The Italian dinner was fantastic!', 1, 5, '2024-07-21'),
(2, 'Great Sushi', 'Loved the sushi, very fresh and tasty.', 2, 4, '2024-07-22'),
(3, 'BBQ Heaven', 'The BBQ was out of this world!', 3, 5, '2024-07-23'),
(4, 'Good Vegan Meal', 'The vegan meal was healthy and delicious.', 4, 4, '2024-07-24'),
(5, 'Exquisite French Cuisine', 'The French dishes were exquisite and well-prepared.', 5, 5, '2024-07-25');
