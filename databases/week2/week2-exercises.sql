-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/class_exercises.md#design-and-implement-a-database-for-existing-data


-- Queries


-- Get all the tasks assigned to Pavel;
SELECT task.id AS task_id, task.title, status.name AS status
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
JOIN user ON user_task.user_id = user.id
WHERE user.name LIKE "%Pavel%"
ORDER BY task_id;


-- Find how many tasks each user is responsible for;
SELECT user.name, COUNT(user_task.task_id) AS task_count
FROM user
LEFT JOIN user_task ON user.id = user_task.user_id
GROUP BY user.name;


-- Find how many tasks with a status=Done each user is responsible for;
SELECT user.name, COUNT(task.id) AS task_count
FROM user
LEFT JOIN user_task ON user.id = user_task.user_id
LEFT JOIN task ON user_task.task_id = task.id AND 
    task.status_id = (
    SELECT id FROM status
    WHERE name = 'Done')
GROUP BY user.name;


-- Design and implement a database for existing data
-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/articles_example.json

DROP TABLE IF EXISTS article;
CREATE TABLE article (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);


DROP TABLE IF EXISTS author;
CREATE TABLE author (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);


DROP TABLE IF EXISTS tag;
CREATE TABLE tag (
    name VARCHAR(50) PRIMARY KEY
);


DROP TABLE IF EXISTS article_author;
CREATE TABLE article_author (
    article_id INT,
    author_id INT,
    PRIMARY KEY (article_id, author_id),
    FOREIGN KEY (article_id) REFERENCES article(id),
    FOREIGN KEY (author_id) REFERENCES author(id)
);


DROP TABLE IF EXISTS article_tag;
CREATE TABLE ArticleTag (
    article_id INT,
    tag_name VARCHAR(50),
    PRIMARY KEY (article_id, tag_name),
    FOREIGN KEY (article_id) REFERENCES article(id),
    FOREIGN KEY (tag_name) REFERENCES tag(name)
);


-- Insert data into article
INSERT INTO article (id, title, content) VALUES
(1, 'BREAKING NEWS: Water is wet!', 'Scientists have discovered that water is wet, it''s amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'),
(2, 'Heavy Snowfall Expected this Weekend', 'Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(3, 'BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!', 'Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ');


-- Insert data into author
INSERT INTO author (id, name) VALUES
(1, 'James Smith'),
(2, 'Jane Jones'),
(3, 'Aliya Awad'),
(4, 'Igor Vladimir'),
(5, 'Kim Jensen');
