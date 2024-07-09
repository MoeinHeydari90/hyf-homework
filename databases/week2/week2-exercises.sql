-- https://github.com/HackYourFuture-CPH/databases/blob/main/lesson2/class_exercises.md#design-and-implement-a-database-for-existing-data

-- Get all the tasks assigned to Pavel;
SELECT task.id AS task_id, task.title, status.name AS status
FROM user_task
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
JOIN user ON user_task.user_id = user.id
WHERE user.name LIKE "%Pavel%"
ORDER BY task_id;



