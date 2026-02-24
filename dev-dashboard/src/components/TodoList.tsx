import React, { useMemo } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completedCount = useMemo(() => todos.filter(todo => todo.completed).length, [todos]);

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <p>Completed Tasks: {completedCount}</p>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;