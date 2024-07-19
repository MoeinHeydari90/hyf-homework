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