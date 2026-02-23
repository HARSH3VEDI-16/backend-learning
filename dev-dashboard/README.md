React Fundamentals Dashboard

A learning-focused React + TypeScript project built to understand core React concepts including state management, events, props, conditional rendering, and component architecture.
# Project Purpose

This project was created to practice and implement:

React Functional Components

TypeScript with TSX

State management using useState

Event handling with proper TypeScript types

Controlled form components

Conditional rendering

Rendering lists with proper keys

Lifting state up

One-way data flow

Stateful vs Stateless components

# Tech Stack

React

TypeScript

Vite

Node.js

📂 Project Structure
src/
 ├── components/
 │     ├── Header.tsx
 │     ├── Counter.tsx
 │     ├── CountDisplay.tsx
 │     ├── UserCard.tsx
 │     └── InputForm.tsx
 ├── App.tsx
 └── main.tsx
# Features Implemented
1️. Counter Component

Demonstrates local state using useState

Shows re-render behavior

Separates logic (stateful) from UI (stateless)

2️. User List Rendering

Renders multiple users using .map()

Uses stable and unique keys

Strongly typed props using TypeScript

3️. Controlled Form

Name and Email inputs

Single state object for form data

Typed event handlers

Prevents default form submission

Logs form data to console

4️. Conditional Rendering

UI updates based on boolean state

Short-circuit rendering (&&)

Ternary rendering

🧠 Key Concepts Practiced
State

State represents data that changes over time

UI = f(state)

Re-render happens when state updates

Props

Props are read-only

Data flows from parent → child

Typed props act as contracts

One-Way Data Flow

Parent controls data

Child receives and renders

Predictable UI updates

Lifting State Up

State moved to closest common parent when shared

# How to Run the Project

Install dependencies

npm install

Start development server

npm run dev

Open browser at the provided localhost URL

# Learning Reference

React Official Documentation

useState Hook

Conditional Rendering

Rendering Lists