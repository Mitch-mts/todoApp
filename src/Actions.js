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
            <input
                type="text"
                value={input}
                onChange={e=>setInput(e.target.value)}
            />
            <button onClick={addTodos} >Add Todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} >
                        {todo}
                        <button onClick={()=>deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Actions