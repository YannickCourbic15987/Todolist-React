import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoMain() {

    const [task, setTask] = useState([])


    const addTask = (todo) => {
        const newtask = [todo, ...task]
        // ici ce que je fais , c'est que je crée une foonction fléchée 
        // je met en para todo , et je récupère tout les argument dans todos 
        //mais comme todos est immuable , je vais crée une const et lui assigner et cela 
        // et lui mettre comme nouveau état de todos => newtodo
        setTask(newtask)
    }


    console.log(task)
    const removeTask = (id) => {
        const todoRemove = [...task].filter(todo => todo.id !== id)
        setTask(todoRemove)
    }

    const lineThrougth = (id) => {
        let updateTaskLine = task.map(
            (todo) => {
                if (todo.id === id) {
                    todo.lineFunction = !todo.lineFunction
                }
                return todo
            }
        )
        setTask(updateTaskLine)
    }

    // const updateTodo = (todoId ,newValue) => {
    //     setTask(prev => prev.map(element => (
    //         element.id === todoId ? newValue : element
    //     )))
    // }


    const updateTask = (id) => {
        let updateValueTask = task.map(
            (todo) => {
                if (todo.id === id) {
                    todo.updated = !todo.updated
                }
                return todo
            }
        )
        setTask(updateValueTask)
    }


    return (





        <div>
            <h1>Todo-app</h1>
            <TodoForm submit={addTask} />

            <Todo
                tasks={task}
                removeTask={removeTask}
                lineThrougth={lineThrougth}
                updateTask={updateTask}
            />

        </div>
    )
}

export default TodoMain