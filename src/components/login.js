import React,{useEffect, useState} from 'react';
import "./login.css";
import { useHistory} from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(!1);
    let history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (username === "admin" && password === "admin123"){
           setIsLoggedin(1);
           localStorage.setItem("token","logged in")
        //console.log(localStorage.getItem("token"))
        //localStorage.removeItem("token")
        //console.log(localStorage.getItem("token"))
        }
        setUsername("");
        setPassword("");
        
    }
   useEffect( ()=>{
       if (localStorage.getItem("token") === "logged in"){
        history.push("/home");
       }
   })
  

    return (
        <div className="todo-login">
            <h1 className="login-head"> LOGIN HERE</h1>
             <hr></hr>
            <form id ="login-form" onSubmit={(e) => handleSubmit(e)} >
                <input 
                    type="text"
                    value ={username}
                    placeholder="Enter Username"
                    onChange = {keyboardstroke => setUsername(keyboardstroke.target.value)}/>

                <input
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={keyboardstroke => setPassword(keyboardstroke.target.value)}/> 
                    <br></br>
                    <button type="submit" > AUTHENTICATE</button>
            </form>
            
        </div>
    )
}
