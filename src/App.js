import React, { useState } from "react";
import reactDOM from "react-dom";

import "./style.css"

import TodoItem from "./TodoItem";


const App = () => {
  const [todos, setTodos] = useState(TodoItemsFromOutside);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [
      ...todos,
      { id: newTodo.replace(" ", "-"), labelName: newTodo },
    ];
    setTodos(newTodos);
    setNewTodo("");
  };

  return (
    <div id="my-todo-app" className="my-todo-app">
      <h1>My todo app</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </form>
      {todos.map((item) => {
        return (
          <TodoItem key={item.id} id={item.id} labelName={item.labelName} />
        );
      })}
    </div>
  );
};
// React.createElement(App) == <app />
reactDOM.render(<App />, document.getElementById("root"));
