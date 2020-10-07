import React from 'react';

const TodoItem = ({id, labelName}) => {
    //return React.createElement(
    //    'div',
    //    {className: "todo-item"},
    //    [
    //        React.createElement("input", {type: "checkbox", id: id}),
    //        React.createElement("label", {htmlFor: id}, labelName),
    //    ]
    //)

    return (
        <div className="todo-item">
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>
                {labelName}
            </label>
       </div>
    )
}

export default TodoItem;