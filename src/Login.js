export default function Login({ onLogin }) {
    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target['login-username'].value;
        if (username) {
            onLogin(username);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" />
        </form>
    );
}