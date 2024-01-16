import React, { useState } from "react";

const Actions = () => {
    const [todos, setTodos] =  useState([])
    const [input, setInput] = useState('')

    const addTodos = () => {
        setTodos([...todos, input])
        setInput('')
    }

    const deleteTodo = (index) => {
        const newTodo = [...todos]
        newTodo.splice(index, 1)
        setTodos(newTodo)
    }

    return(
        <>
           <div className="todo-container" >
                <div className="todo-form" >
                    <input
                        type="text"
                        value={input}
                        onChange={e=>setInput(e.target.value)}  
                        className="todo-input"              
                    />
                    <button onClick={addTodos} className="todo-button" >Add Todo</button>
                </div>
           </div>

            <ul className="todo-list" >
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item" >
                        <span className="todo-text" >{todo}</span>
                        <button onClick={()=>deleteTodo(index)}  className="todo-button-delete" >Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Actions