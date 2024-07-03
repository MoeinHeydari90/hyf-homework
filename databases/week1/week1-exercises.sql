-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson1/lesson-data.sql

-- Select the names and phones of all users;
SELECT name, phone
FROM user;


-- Select the name of the user with id=10;
SELECT name
FROM user
WHERE id = 10;


-- Find how many users exist in the database;
SELECT COUNT(*) AS user_count
FROM user;


-- Select the names of the first 5 users in the database;
SELECT name
FROM user
LIMIT 5;


-- Select the names of the last 3 users in the database;
SELECT name
FROM user
ORDER BY id DESC
LIMIT 3;


-- Sum all the ids in the user table;
SELECT SUM(id) AS total_id_sum
FROM user;


-- Select all users and order them alphabetically by name;
SELECT *
FROM user
ORDER BY name;


-- Find all tasks that include SQL either on the title or on the description;
SELECT *
FROM task
WHERE title LIKE '%SQL%' OR description LIKE '%SQL%';


-- Find the title of all tasks that the user Maryrose is responsible for;
SELECT task.title
FROM task
JOIN user ON task.user_id = user.id
WHERE user.name LIKE '%Maryrose%';


-- Find how many tasks each user is responsible for;
SELECT user.name, COUNT(task.id) AS task_count
FROM user
LEFT JOIN task ON user.id = task.user_id
GROUP BY user.name;


-- Find how many tasks with a status=Done each user is responsible for;
SELECT user.name, COUNT(task.id) AS done_task_count
FROM user
JOIN task ON user.id = task.user_id
JOIN status ON task.status_id = status.id
WHERE status.name = 'Done'
GROUP BY user.name
ORDER BY done_task_count DESC;