INSERT INTO departments (name) VALUES
('Computer Science'),
('Mechanical Engineering'),
('Business Administration');

INSERT INTO students (name, email, department_id) VALUES
('Harsh Verma', 'harsh@example.com', 1),
('Amit Sharma', 'amit@example.com', 2),
('Priya Singh', 'priya@example.com', 1);

INSERT INTO student_profiles (student_id, date_of_birth, gender) VALUES
(1, '2002-05-10', 'Male'),
(2, '2001-08-15', 'Male'),
(3, '2003-01-20', 'Female');

INSERT INTO courses (title, credits) VALUES
('Database Systems', 4),
('Operating Systems', 3),
('Business Management', 3);

INSERT INTO enrollments (student_id, course_id, grade) VALUES
(1, 1, 'A'),
(1, 2, 'B'),
(2, 3, 'A'),
(3, 1, 'A');