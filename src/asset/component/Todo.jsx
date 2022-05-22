import React, { useRef, useState } from 'react'
import '../css/Todo.css'
// import TodoMain from './TodoMain'
function Todo({ tasks, removeTask, lineThrougth, updateTask }) {
    const [newInput, setNewInput] = useState('')
    const updated = useRef(null)
    const newHandleSubmit = (e) => {
        setNewInput(e.target.value)
    }
    console.log(newInput)

    return (

        <div >
            {
                tasks.map((todo, id) => {
                    return (
                        <div key={id}>
                            <div key={todo.id} className={todo.lineFunction ? 'line' : 'display-line'}>
                                <p ref={updated} className={todo.updated ? 'RemoveP' : 'display-line'}> {todo.value}</p>

                                <input type='text'
                                    className={todo.updated ? 'displayInput' : 'RemoveP'}
                                    onChange={newHandleSubmit}
                                    value={newInput}
                                />
                                <button
                                    onClick={() => lineThrougth(todo.id)}
                                >
                                    terminer
                                </button>
                                <button
                                    onClick={
                                        () => removeTask(todo.id)
                                    }
                                >
                                    suppimer
                                </button>
                                <button
                                    onClick={
                                        () => {
                                            updateTask(todo.id)
                                            if (updated.className = 'RemoveP') {
                                                todo.value = newInput
                                                setNewInput('')
                                            }

                                        }

                                    }
                                >
                                    modifier
                                </button>

                            </div>

                        </div>
                    )

                })
            }

        </div>
    )
}

export default Todo