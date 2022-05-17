import React, { useState } from "react";

function Todolist() {
  let [btnremove, setBtnremove] = useState(undefined);
  let [btnterminer, setBtnterminer] = useState(undefined);
  let [btnmod, setBtnmod] = useState(undefined);

  function createbtn() {
    const Input = document.querySelector("#Input");
    const todo = document.querySelector("#todo");
    const btn = document.createElement("button");
    const br = document.createElement("br");
    const para = document.createElement("p");
    para.style.marginRight = "10px";
    todo.appendChild(para);
    todo.appendChild(btn);
    btn.textContent = "terminer";
    btn.style.marginRight = "10px";
    const btn1 = document.createElement("button");
    todo.appendChild(btn1);
    btn1.style.marginRight = "10px";
    btn1.textContent = "supprimer";
    const btn2 = document.createElement("button");
    todo.appendChild(btn2);
    btn2.textContent = "modifier";
    todo.appendChild(br);
    btn2.style.marginRight = "10px";
    para.textContent = Input.value;
    btnremove = btn1;
    btnremove.onclick = () => {
      setBtnremove(
        btn.remove(),
        btn1.remove(),
        btn2.remove(),
        para.remove(),
        br.remove()
      );
    };
    btnterminer = btn;
    let i = 0;
    btnterminer.onclick = () => {
      console.log(i);
      setBtnterminer(
        i % 2 === 1
          ? (para.style.textDecoration = "line-through")(
              (para.style.color = "red")
            )
          : (para.style.textDecoration = "none")((para.style.color = "black"))
      );
    };
    btnmod = btn2;
    btnmod.onclick = () => {
      const input2 = document.createElement("input");
      todo.appendChild(input2);
      setBtnmod(
        para.remove()((todo.style.display = "flex"))(
          (todo.style.flexDirection = "row-start")
        )
      );
    };
  }

  return (
    <>
      <p>Votre tâche : </p>
      <input id="Input" />
      <button onClick={createbtn}> add</button>
      <div id="todo"></div>
    </>
  );
}
export default Todolist;
