import React, {useState, useEffect, useRef} from 'react';

export default function Todo(props) {

    // setting input value
    const[value, setValue] = useState(props.edit ? props.edit.value :'');

    const valueRef = useRef(null)

    useEffect(()=>{
        valueRef.current.focus()
    })

    //handle submitting of form

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
                {props.edit ? (
                        <>
                            <input
                            type="text"
                            className = 'todo-input edit'
                            placeholder="Update Item"
                            value = {value}
                            onChange = {keyboardstroke => setValue(keyboardstroke.target.value)}
                            ref = {valueRef}
                          /> 
                          <button type= "submit"  className = 'todo-button edit'> Update</button>
                    </>
                 ): (
                        <>
                            <input
                            type="text"
                            placeholder="Add Todo"
                            value = {value}
                            className="todo-input"
                            onChange = {keyboardstroke => setValue(keyboardstroke.target.value)}
                            ref = {valueRef}
                            
                            /> 
                            <button type= "submit" className="todo-button"> Add</button>
                        </>
                    )
                }
            
            
             </form>
        
           
        </div>
        </div>
    
        
        
    )
}