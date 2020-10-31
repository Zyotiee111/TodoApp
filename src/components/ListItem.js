import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm.js';
import Todos from './Todos';

export default function ListItem() {
    

   const [todos, setTodos] = useState([]);



   const addTodo = todo =>{
   if (!todo.text || /^\s*$/.test(todo.text)){
       return
   }
   setTodos([...todos,todo])
   
   const newTodo = [todo, ...todos]
   setTodos(newTodo)
 
  }


    const removeTodo = id =>{
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }



    const completeTodo =id =>{
        let updatedTodos = todos.map(todo =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;

            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (
        <div>
        <h1> Welcome To ToDo's App </h1>
        <h3> {date.toLocaleDateString()} {} {} {date.toLocaleTimeString()} </h3>
        <hr></hr>
          <TodoForm onSubmit = {addTodo}/>  
          <Todos 
          todos = {todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} />
         
        </div>
    )
}
