
-- Create Tables for Student-Course System

--  Departments Table (One-to-Many with Students)
CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

--  Students Table
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_department
        FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE CASCADE
);

--  Student Profile (One-to-One with Students)
CREATE TABLE student_profiles (
    profile_id SERIAL PRIMARY KEY,
    student_id INT UNIQUE,
    date_of_birth DATE,
    gender VARCHAR(10),

    CONSTRAINT fk_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
);

--  Courses Table
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    credits INT CHECK (credits > 0)
);

--  Enrollments Table (Many-to-Many)
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    grade VARCHAR(2),

    PRIMARY KEY (student_id, course_id),

    CONSTRAINT fk_student_enroll
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_course_enroll
        FOREIGN KEY (course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
);

--  Index for Performance
CREATE INDEX idx_student_email ON students(email);