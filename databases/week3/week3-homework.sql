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


-- Queries to Meal Table


-- Get all meals
SELECT * FROM Meal;


-- Add a new meal
INSERT INTO Meal (id, title, description, location, `when`, max_reservations, price, created_date) VALUES
(6, 'Mexican Fiesta', 'A vibrant evening with Mexican food.', 'Roskilde', '2024-07-30 19:00:00', 20, 60.00, '2024-07-16');


-- Get a meal with any id, fx 1
SELECT * FROM Meal
WHERE id = 1;


-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET title = 'Osso Buco (Italian Dinner)',
    description = 'Braised veal shanks with vegetables, white wine, and broth.'
WHERE id = 1;


-- Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE id = 6;


-- Queries to Reservation Table


-- Get all reservations
SELECT * FROM Reservation;


-- Add a new reservation
INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(6, 3, 2, '2024-07-17', '6789012345', 'David Green', 'david.green@example.com');


-- Get a reservation with any id, fx 1
SELECT * FROM Reservation
WHERE id = 4;


-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests = 4,
    contact_name = 'Alex Smith'
WHERE id = 2;


-- Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 1;


-- Queries to Review Table


-- Get all reviews
SELECT * FROM Review;


-- Add a new review
INSERT INTO Review (id, title, description, meal_id, stars, created_date) VALUES
(6, 'Excellent Experience', 'The meal was fantastic, and the service was impeccable.', 3, 5, '2024-07-18');



-- Get a review with any id, fx 1
SELECT * FROM Review
WHERE id = 1;


-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET title = 'Fantastic Dining Experience',
    description = 'The meal exceeded my expectations. The flavors were delightful, and the service was impeccable.'
WHERE id = 1;


-- Delete a review with any id, fx 1
DELETE FROM Review
WHERE id = 6;


-- Additional queries


-- Get meals that has a price smaller than a specific price fx 90
SELECT *
FROM Meal
WHERE price < 90;


-- Get meals that still have available reservations
SELECT *
FROM Meal
WHERE id IN (
    SELECT meal_id
    FROM Reservation
    GROUP BY meal_id
    HAVING COUNT(*) < max_reservations
);


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM Meal
WHERE title LIKE 'Rød grød med%';


-- Get meals that has been created between two dates
SELECT *
FROM Meal
WHERE created_date BETWEEN '2024-01-01' AND '2024-07-30';


-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM Meal
ORDER BY created_date DESC
LIMIT 5;


-- Get the meals that have good reviews
SELECT *
FROM Meal
INNER JOIN (
    SELECT meal_id, AVG(stars) AS average_rating
    FROM Review
    GROUP BY meal_id
    HAVING AVG(stars) >= 4
) AS ReviewSummary ON Meal.id = ReviewSummary.meal_id;


-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM Reservation
WHERE meal_id = 2
ORDER BY created_date;


-- Sort all meals by average number of stars in the reviews
SELECT *
FROM Meal
LEFT JOIN (
    SELECT meal_id, AVG(stars) AS avg_stars
    FROM Review
    GROUP BY meal_id
) AS avg_rating ON Meal.id = avg_rating.meal_id
ORDER BY avg_rating.avg_stars DESC;