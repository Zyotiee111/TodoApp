import React, {useState} from 'react';
import "./todo.css";
import { Link } from 'react-router-dom';

export default function Todo() {
    //setting todo list
    const [toDoList, setToDoList] = useState([
        {text:'hwy'},
        {text:'hi'},
    ])

    // setting input value
    const[value, setValue] = useState("");

    //handle submitting of form

    const handleSubmit = (mouseCLick) =>{
        mouseCLick.preventDefault();
        addItem(value);
        setValue('');
    }

    //adding item
     const addItem = (text) => {
        const updatedToDoList = [...toDoList, {text}];
        setToDoList(updatedToDoList);
    }


    return (
        <div>
        <h1 className="todo-header"> Welcome To TODO'S App</h1>
        <div className="todo">
             <form id = "to-do-form" onSubmit = {handleSubmit}>
             <input
              type="text"
              placeholder="Enter Text"
              value = {value}
              onChange = {keyboardstroke => setValue(keyboardstroke.target.value)}
            /> 
             <button type= "submit" > Add</button>
             </form>
            <div>
               {toDoList.map((data,index) => {
                   return <li key ={index}>
                       Item : <span>{data.text} </span> 
                        <button> Delete</button>
                        </li>
        
                    })
                }
            </div>
        </div>
        <button type="submit" className="login"> <Link to ="/logout"> Logout </Link> </button>
        </div>
    )
}
