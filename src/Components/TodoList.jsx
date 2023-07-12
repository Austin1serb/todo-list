import React from 'react';
import './TodoList.css';
const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <ul className='todo-list' >
            {todos.map((todo, index) => (
                <li key={index} className={todo.checked ? 'completed':''} >
                                        <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => toggleTodo(index)}
                    />

                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
