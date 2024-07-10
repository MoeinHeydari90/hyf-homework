-- Part 3: More queries


-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT  user.name, task.id, task.title
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
WHERE user.email LIKE '%@spotify.com';


-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title, status.name AS status_name
FROM user
JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';
