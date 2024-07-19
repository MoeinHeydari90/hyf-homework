-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson3/social_media_exercise.md


CREATE DATABASE SocialMediaDB;
USE SocialMediaDB;


CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    registration_datetime DATETIME NOT NULL
);


CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    creation_datetime DATETIME NOT NULL,
    update_datetime DATETIME NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES user(id)
);


CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    creation_datetime DATETIME NOT NULL,
    update_datetime DATETIME NOT NULL,
    author_id INT NOT NULL,
    post_id INT NOT NULL,
    parent_comment_id INT,
    FOREIGN KEY (author_id) REFERENCES user(id),
    FOREIGN KEY (post_id) REFERENCES post(id),
    FOREIGN KEY (parent_comment_id) REFERENCES comment(id)
);


CREATE TABLE reaction_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);


CREATE TABLE reaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    reaction_type_id INT NOT NULL,
    post_id INT,
    comment_id INT,
    reaction_datetime DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (reaction_type_id) REFERENCES reaction_type(id),
    FOREIGN KEY (post_id) REFERENCES post(id),
    FOREIGN KEY (comment_id) REFERENCES comment(id),
    UNIQUE(user_id, reaction_type_id, post_id, comment_id)
);


CREATE TABLE friendship (
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    friendship_datetime DATETIME NOT NULL,
    FOREIGN KEY (user1_id) REFERENCES user(id),
    FOREIGN KEY (user2_id) REFERENCES user(id),
    UNIQUE(user1_id, user2_id), -- To prevent duplicate friendships.
);


-- Insert data


INSERT INTO user (name, email, password, registration_datetime) VALUES
('Alice Smith', 'alice@example.com', 'password123', '2024-01-15 08:30:00'),
('Bob Johnson', 'bob@example.com', 'password456', '2024-02-20 09:45:00'),
('Charlie Davis', 'charlie@example.com', 'password789', '2024-03-25 10:00:00'),
('Diana Brown', 'diana@example.com', 'password321', '2024-04-10 11:15:00'),
('Eve Wilson', 'eve@example.com', 'password654', '2024-05-05 12:30:00');


INSERT INTO post (title, content, creation_datetime, update_datetime, author_id) VALUES
('First Post', 'This is the content of the first post.', '2024-06-01 14:00:00', '2024-06-01 14:00:00', 1),
('Second Post', 'This is the content of the second post.', '2024-06-02 15:00:00', '2024-06-02 15:00:00', 2),
('Third Post', 'This is the content of the third post.', '2024-06-03 16:00:00', '2024-06-03 16:00:00', 3),
('Fourth Post', 'This is the content of the fourth post.', '2024-06-04 17:00:00', '2024-06-04 17:00:00', 4),
('Fifth Post', 'This is the content of the fifth post.', '2024-06-05 18:00:00', '2024-06-05 18:00:00', 5);


INSERT INTO comment (content, creation_datetime, update_datetime, author_id, post_id, parent_comment_id) VALUES
('First comment on first post.', '2024-06-01 14:30:00', '2024-06-01 14:30:00', 2, 1, NULL),
('Second comment on first post.', '2024-06-01 15:00:00', '2024-06-01 15:00:00', 3, 1, NULL),
('First comment on second post.', '2024-06-02 15:30:00', '2024-06-02 15:30:00', 1, 2, NULL),
('Reply to first comment on first post.', '2024-06-01 15:30:00', '2024-06-01 15:30:00', 4, 1, 1),
('First comment on third post.', '2024-06-03 16:30:00', '2024-06-03 16:30:00', 5, 3, NULL);


INSERT INTO reaction_type (name) VALUES
('like'),
('highfive'),
('laugh'),
('cry');


INSERT INTO reaction (user_id, reaction_type_id, post_id, comment_id, reaction_datetime) VALUES
(1, 1, 1, NULL, '2024-06-01 14:15:00'),  -- Alice likes the first post
(2, 2, 1, NULL, '2024-06-01 14:20:00'),  -- Bob highfives the first post
(3, 3, 1, NULL, '2024-06-01 14:25:00'),  -- Charlie laughs at the first post
(4, 1, NULL, 1, '2024-06-01 14:35:00'),  -- Diana likes the first comment on the first post
(5, 4, NULL, 2, '2024-06-01 15:05:00');  -- Eve cries at the second comment on the first post


INSERT INTO friendship (user1_id, user2_id, friendship_datetime) VALUES
(1, 2, '2024-06-01 10:00:00'),  -- Alice and Bob are friends
(1, 3, '2024-06-02 10:30:00'),  -- Alice and Charlie are friends
(2, 4, '2024-06-03 11:00:00'),  -- Bob and Diana are friends
(3, 5, '2024-06-04 11:30:00'),  -- Charlie and Eve are friends
(4, 5, '2024-06-05 12:00:00');  -- Diana and Eve are friends
