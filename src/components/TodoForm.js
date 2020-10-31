import React, {useState, useEffect, useRef} from 'react';

export default function Todo(props) {

    const[value, setValue] = useState(props.edit ? props.edit.value :'');

    const valueRef = useRef(null)

    useEffect(()=>{
        valueRef.current.focus()
    })


    const handleSubmit = (mouseCLick) =>{
        mouseCLick.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:value
        })
       
        setValue('');
    }


    return (
        <div>
        <div className="todo">
             <form id = "to-do-form" onSubmit = {handleSubmit}>
                            <input
                            type="text"
                            placeholder="Add Todo"
                            value = {value}
                            className="todo-input"
                            onChange = {keyboardstroke => setValue(keyboardstroke.target.value)}
                            ref = {valueRef}
                            
                            /> 
                            <button type= "submit" className="todo-button"> Add</button>
           </form>
        
           
        </div>
        </div>
    
        
        
    )
}