import React, { useState } from 'react';
import "./login.css";

export default function Signin({setLoggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            localStorage.setItem("token", "logged in");
            setLoggedIn(1);
        }
        setUsername("");
        setPassword("");

    }

    return (
        <div className="todo-login">
            <h1 className="login-head"> LOGIN HERE</h1>
            <hr></hr>
            <form id="login-form" onSubmit={(e) => handleSubmit(e)} >
                <input
                    type="text"
                    value={username}
                    placeholder="Enter Username"
                    onChange={keyboardstroke => setUsername(keyboardstroke.target.value)} />

                <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={keyboardstroke => setPassword(keyboardstroke.target.value)} />
                <br></br>
                <button type="submit" > AUTHENTICATE</button>
            </form>

        </div>
    )
}