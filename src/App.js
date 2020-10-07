import React from 'react';
import reactDOM from 'react-dom';

import TodoItem from './TodoItem';

//const App = () => {
    //return React.createElement('div', {id: "my-todo-app", className: "my-todo-app"}, [
    //    React.createElement('h1', {}, "My todo app"),
    //    React.createElement(TodoItem, {id: "learn-react", labelName: "Learn React"}),
    //    React.createElement(TodoItem, {id: "create-todo-app", labelName: "Create a todo app"}),
    //    React.createElement(TodoItem, {id: "profit", labelName: "Profit"}),
    //])

    
//}


const TodoItemFromOutside = [
    {id: "learn-react", labelName: "Learn React"},
    {id: "create-todo-app", labelName: "Create a todo app"},
    {id: "profit", labelName: "Profit"}
]

 const App = () => (
    <div id="my-todo-app" className="my-todo-app">
        <h1>My todo app</h1>
        {TodoItemFromOutside.map((item) => <TodoItem key={item.id} id={item.id} labelName={item.labelName} />) }
    </div>
)
reactDOM.render(<App />, document.getElementById("root"))