Student Course Database Project
Overview

This project demonstrates relational database design using PostgreSQL.
It covers table relationships, constraints, indexing, CRUD operations, aggregation, views, and materialized views.

Database Relationships
One-to-Many

One department can have multiple students.
(Departments → Students)

One-to-One

Each student has exactly one profile.
(Students → Student_Profiles)

Many-to-Many

Students can enroll in multiple courses.
Courses can have multiple students.
This is implemented using the Enrollments table.

Concepts Covered

CREATE TABLE

Primary Key

Foreign Key

UNIQUE Constraint

CHECK Constraint

INSERT

UPDATE

DELETE

SELECT

JOIN

GROUP BY

HAVING

ORDER BY

Aggregate Functions (COUNT, SUM, AVG, MAX, MIN)

Indexing

EXPLAIN ANALYZE

Views

Materialized Views

REFRESH MATERIALIZED VIEW

PROJECT STRUCTURE 

student-course-sql/
├── schema.sql
├── data.sql
├── views.sql
├── materialized_views.sql
├── test_queries.sql
├── README.md

How to Run

Create database:
CREATE DATABASE student_course_db;

Run files in order:

schema.sql

data.sql

views.sql

materialized_views.sql

Execute test_queries.sql to test operations.

View vs Materialized View

View → Does not store data and always shows latest data.
Materialized View → Stores query result physically and requires manual refresh.