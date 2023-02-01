"use strict";
let count = 1;
class Todo {
    constructor(txt) {
        this.id = count++;
        this.txt = txt;
        this.complete = "";
        this.data = new Date();
    }
}
const listaTodo = [];
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#addTodo button');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', addTodo);
    printTodos();
});
function addTodo() {
    const inputTodo = document.querySelector('#addTodo input');
    listaTodo.push(new Todo(inputTodo === null || inputTodo === void 0 ? void 0 : inputTodo.value));
    printTodos();
}
function printTodos() {
    let ul = document.querySelector('#listaTodo ul');
    if (ul !== null) {
        ul.innerHTML = "";
    }
    listaTodo.forEach((t, i) => {
        const li = document.createElement('li');
        //li.setAttribute('class', t.complete)
        li.className = t.complete + ' list-group-item d-flex justify-content-between';
        li.innerHTML = `${t.id} - ${t.txt} 
                        <span>${t.data.getDate()}/${t.data.getMonth() + 1}</span> 
                        <span>
                            <button type="button" class="btn btn-danger" onclick="removeTodo(${i})">x</button>
                            <button type="button" class="btn btn-warning" onclick="completeTodo(${i})">o</button>
                        </span>`;
        ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
    });
}
function removeTodo(index) {
    listaTodo.splice(index, 1);
    printTodos();
}
function completeTodo(index) {
    const todo = listaTodo[index];
    todo.complete = todo.complete === 'complete' ? '' : 'complete';
    printTodos();
}
