import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./login.css";

export default function Logout() {
  const [isLoggedin, setIsLoggedin] = useState(1);
 
  const handleSubmit = (e) =>{
        setIsLoggedin(!1)
        localStorage.removeItem("token")
      //console.log(localStorage.getItem("token"))
      }

    return (
        <div>
          <h1>  You have been logged out.</h1>
          <button type="submit" className="logout" onSubmit={(e) => handleSubmit(e)}> 
          <Link to ="/"> Login Again </Link> </button>
        </div>
    )
}
