export default function CreateTodo({ user, onAddTodo }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target["create-title"].value;
        const description = e.target["create-description"].value;
        
        const newTodo = {
            title,
            description,
            author: user,
            dateCreated: Date.now(),
            complete: false,
            dateCompleted: null
        };

        onAddTodo(newTodo);
        
        // Clear the form inputs
        e.target["create-title"].value = "";
        e.target["create-description"].value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" required />
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <textarea name="create-description" id="create-description"></textarea>
            </div>
            <input type="submit" value="Add Todo" />
        </form>
    );
}