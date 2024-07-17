import "./App.css";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //Add new task to list//
    setList([...list, newTodo]);
    //Clear input box//
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <div>
      <div className="todo-container">
        <div className="header">To-Do List</div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add New Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" onClick={() => addTodo(input)}>
          +
        </button>
      </div>
      <div>
        <div className="sub-header">Tasks</div>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
