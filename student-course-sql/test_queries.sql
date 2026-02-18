-- One-to-Many
SELECT s.name, d.name AS department
FROM students s
JOIN departments d ON s.department_id = d.department_id;

-- One-to-One
SELECT s.name, sp.date_of_birth
FROM students s
JOIN student_profiles sp ON s.student_id = sp.student_id;

-- Many-to-Many
SELECT s.name, c.title, e.grade
FROM enrollments e
JOIN students s ON e.student_id = s.student_id
JOIN courses c ON e.course_id = c.course_id;

-- Index usage
EXPLAIN ANALYZE
SELECT * FROM students WHERE email = 'harsh@example.com';

-- Refresh MV
REFRESH MATERIALIZED VIEW student_course_mv;

-- Simple SELECT
SELECT * FROM students;

-- UPDATE example
UPDATE students
SET email = 'harsh_updated@example.com'
WHERE student_id = 1;

-- DELETE example
DELETE FROM enrollments
WHERE student_id = 3 AND course_id = 1;

-- Count students per department
SELECT d.name, COUNT(s.student_id) AS total_students
FROM departments d
LEFT JOIN students s ON d.department_id = s.department_id
GROUP BY d.name;

-- Order students by name
SELECT * FROM students
ORDER BY name;

-- Departments having more than 1 student
SELECT d.name, COUNT(s.student_id) AS total_students
FROM departments d
JOIN students s ON d.department_id = s.department_id
GROUP BY d.name
HAVING COUNT(s.student_id) > 1;

-- Total number of students
SELECT COUNT(*) AS total_students
FROM students;

-- Total credits of all courses
SELECT SUM(credits) AS total_credits
FROM courses;

-- Average course credits
SELECT AVG(credits) AS average_credits
FROM courses;

-- Maximum course credits
SELECT MAX(credits) AS max_credits
FROM courses;

-- Minimum course credits
SELECT MIN(credits) AS min_credits
FROM courses;

-- Total students per department
SELECT d.name, COUNT(s.student_id) AS total_students
FROM departments d
LEFT JOIN students s ON d.department_id = s.department_id
GROUP BY d.name;