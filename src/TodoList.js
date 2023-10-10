import Todo from './Todo';

export default function TodoList({ todos = [], onToggleComplete }) {
    if (todos.length === 0) {
        return <div>No todos available. Add one above!</div>;
    }

    return (
        <div>
            {todos.map((t, i) => <Todo key={'todo-' + i} todo={t} onToggleComplete={onToggleComplete} />)}
        </div>
    );
}