-- Part 1: Working with tasks


-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) values 
('Learn about TypeScript', 'Study the basics and advanced features of TypeScript for better development practices', '2024-07-10 14:35:00', '2024-07-11 10:00:00', '2024-07-12 18:00:00', 3, 1);


-- Change the title of a task
UPDATE task
SET title = 'Learn about TypeScript and NodeJS'
WHERE task.id = LAST_INSERT_ID ();


-- Change a task due date
UPDATE task
SET due_date = '2024-09-11 10:30:00'
WHERE title = 'Learn about TypeScript and NodeJS';


-- Change a task status
UPDATE task
SET status_id = 3
WHERE title = 'Wash clothes';


-- Mark a task as complete
UPDATE task
SET status_id = 3
WHERE title = 'Wash the car';
