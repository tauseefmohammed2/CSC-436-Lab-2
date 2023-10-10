export default function Todo({ todo, onToggleComplete }) {
    const { title, description, author, dateCreated, complete, dateCompleted } = todo;
    
    const formatDateTime = (timestamp) => {
        return new Date(timestamp).toLocaleString('default', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <br />
            <i>Created by <b>{author}</b> on {formatDateTime(dateCreated)}</i>
            {complete && <div>Completed on {formatDateTime(dateCompleted)}</div>}
            <br></br>
            <label>Completed?  </label>
            <input 
                type="checkbox" 
                checked={complete} 
                onChange={() => onToggleComplete(todo)} 
            />
        </div>
    );
}