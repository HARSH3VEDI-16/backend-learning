import React, { useReducer } from "react";

// Define types
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number };

// Reducer function
function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// Component
function ReducerExample() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useReducer Todo</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReducerExample;