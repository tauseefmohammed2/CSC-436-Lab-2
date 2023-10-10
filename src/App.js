import React, { useState } from 'react';
import UserBar from './UserBar.js';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

export default function App() {
    const [user, setUser] = useState(null);
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos(prevTodos => [...prevTodos, todo]);
    };

    const handleToggleComplete = (targetTodo) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo === targetTodo 
                ? { ...todo, complete: !todo.complete, dateCompleted: !todo.complete ? Date.now() : null } 
                : todo
            )
        );
    };

    return (
        <div>
            <UserBar user={user} onLogin={setUser} onLogout={() => setUser(null)} />
            {user && <CreateTodo user={user} onAddTodo={handleAddTodo} />}
            <TodoList todos={todos} onToggleComplete={handleToggleComplete} />
        </div>
    );
}