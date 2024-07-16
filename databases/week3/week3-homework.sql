-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/README.md#homework

-- Create all the sql for creating this data model: https://dbdiagram.io/d/5f0460690425da461f045a29


CREATE TABLE Meal (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    when DATETIME,
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
