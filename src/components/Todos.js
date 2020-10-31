import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';



export default function Todos({todos, completeTodo,removeTodo}) {
    
    
    return todos.map((todo,index)=>(
        <div className= {todo.isComplete ? 'todo-row complete':'todo-row'}
        key = {index}>
            
            <div key = {todo.id} onClick = {() => completeTodo(todo.id)}>
            {todo.text}
        
            </div>
            <div className="icons">
            <button classname = "delete" onClick={()=> removeTodo(todo.id)}> 
             <DeleteIcon/>
             </button>

            </div>
        </div>
        
    ))
        
}
 

