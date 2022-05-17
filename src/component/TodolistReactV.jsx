import React from "react";
import { useState, useRef } from "react";
import "../component/main.css";
function TodolistReactV() {
  const [todos, setTodos] = useState([]);
  const inputTodo = useRef(null);
  const btn1 = useRef(null);
  const liTodo = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    setTodos([...todos, inputTodo.current.value]);
  };
  let k = 0;

  return (
    <>
      <h2>Ma liste de tâche </h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" ref={inputTodo} />
        <button type="submit">ajouter</button>

        <ul>
          {todos.map((element, i) => {
            return (
              <li key={i} ref={liTodo} id={"li" + i}>
                {element}

                <button
                  id="btn1"
                  ref={btn1}
                  onClick={(e) => {
                    e.preventDefault();
                    const lie = e.target.parentElement;
                    k++;

                    console.log(k);
                    if (k % 2 === 1) {
                      lie.classList.add("display");
                    } else {
                      lie.classList.remove("display");
                    }
                  }}
                >
                  terminer
                </button>
                <button
                  id="btn2"
                  onClick={(e) => {
                    e.preventDefault();
                    const lie = e.target.parentElement;

                    lie.remove();
                  }}
                >
                  supprimer
                </button>
                <button
                  id="btn3"
                  onClick={(e) => {
                    e.preventDefault();
                    const lie = e.target.parentElement;
                    console.log(lie);
                    const liemod = document.querySelector("#li" + i);
                    console.log(liemod);
                    liemod.textContent = " ";
                    const newinput = document.createElement("input");
                    liemod.appendChild(newinput);
                    newinput.addEventListener("keypress", function (event) {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        const keepvalue = newinput.value;
                        newinput.id = "inputnew";
                        console.log(keepvalue);
                        const inputnew = document.querySelector("#inputnew");
                        console.log(inputnew);
                        inputnew.remove();
                        liemod.innerHTML = keepvalue;
                        const btnend = document.createElement("button");
                        const btnsup = document.createElement("button");
                        const btnmod = document.createElement("button");
                        liemod.appendChild(btnend);
                        liemod.appendChild(btnsup);
                        liemod.appendChild(btnmod);
                        btnend.textContent = "terminer";
                        btnsup.textContent = "supprimer";
                        btnmod.textContent = "modifier";
                        btnend.onclick = (e) => {
                          e.preventDefault();
                          alert("test");
                        };
                      }
                    });
                  }}
                >
                  modifier
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}

export default TodolistReactV;
