import React, {useState} from 'react'
import TodoForm from './TodoForm.js'
import Todos from './Todos'


export default function ListItem() {
   const [todos, setTodos] = useState([]);

   const addTodo = todo =>{
   if (!todo.text || /^\s*$/.test(todo.text)){
       return
   }
   const newTodo = [todo, ...todos]
   setTodos(newTodo)
    };

    const updateTodo = (todoId, newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map ( item =>item.id === todoId ? newValue: item.text))


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
    return (
        <div>
            <h1> Welcome To ToDo's App </h1>
          <TodoForm onSubmit = {addTodo}/>  
          <Todos todos = {todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
