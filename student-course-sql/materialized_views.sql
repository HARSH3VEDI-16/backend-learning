CREATE MATERIALIZED VIEW student_course_mv AS
SELECT s.name AS student_name,
       d.name AS department,
       c.title AS course,
       e.grade
FROM enrollments e
JOIN students s ON e.student_id = s.student_id
JOIN departments d ON s.department_id = d.department_id
JOIN courses c ON e.course_id = c.course_id;