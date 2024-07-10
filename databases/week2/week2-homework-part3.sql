-- Part 3: More queries


-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT  user.name, task.id, task.title
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
WHERE user.email LIKE '%@spotify.com';
