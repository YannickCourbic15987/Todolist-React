import React, { useState } from "react";


function Todolist() {

    let [btnremove, setBtnremove] = useState(undefined)



    function createbtn() {
        const Input = document.querySelector("#Input")
        const todo = document.querySelector("#todo")
        const btn = document.createElement('button')
        const br = document.createElement("br")
        const para = document.createElement("p")
        para.style.marginRight = "10px"
        todo.appendChild(para)
        todo.appendChild(btn)
        btn.textContent = "terminer"
        btn.style.marginRight = "10px"
        const btn1 = document.createElement('button')
        todo.appendChild(btn1)
        btn1.style.marginRight = "10px"
        btn1.textContent = "supprimer"
        const btn2 = document.createElement('button')
        todo.appendChild(btn2)
        btn2.textContent = "modifier"
        todo.appendChild(br)
        btn2.style.marginRight = "10px"
        para.textContent = Input.value

        btn1.onclick = () => {
            setBtnremove(
                btn.remove(),
                btn1.remove(),
                btn2.remove(),
                para.remove(),
                br.remove()
            )
        }

    }












    return (
        <>
            <p>Votre tâche : </p>
            <input id="Input" />
            <button onClick={createbtn}> add</button>
            <div id="todo">

            </div>

        </>
    )

}
export default Todolist