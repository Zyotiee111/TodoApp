import React,{useState} from 'react'
import TodoForm from './TodoForm.js';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function Todos({todos, completeTodo,removeTodo,updateTodo}) {
    const[edit, setEdit] = useState({
        id: null,
        value :''
    })
    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }
        if (edit.id){
            return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
        }
    
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
            <button className="edit" onClick={() => setEdit(
                    {
                        id: todo.id,
                        value: todo.text
                    }
                )}> 
            <EditIcon/>
            </button>

            </div>
        </div>
    ))
        
}
 

