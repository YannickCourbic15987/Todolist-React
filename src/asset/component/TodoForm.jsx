import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit({
            id: Math.round(Math.random() * 10000),
            value: input
        })
        setInput('')

    }



    return (
        <form className='Todo-task'
            onSubmit={handleSubmit}
        >


            <input
                placeholder='Votre tâche ?'
                type="text"
                className='todo-input'
                value={input}
                onChange={handleChange
                }
            />

            <button
                className='todo-button'
                type="submit"
            >
                Add task
            </button>




        </form>
    )
}

export default TodoForm