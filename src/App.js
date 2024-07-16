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
      <div className="todo">
        <h1>To Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
