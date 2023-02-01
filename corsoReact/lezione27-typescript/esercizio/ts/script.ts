let count = 1;

class Todo {
    id: number;
    txt: string;
    complete: string;
    data: Date;
    constructor(txt: string) {
        this.id = count++;
        this.txt = txt;
        this.complete = "";
        this.data = new Date();
    }
}

const listaTodo: Todo[] = []

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#addTodo button')
    btn?.addEventListener('click', addTodo);
    printTodos();
})

function addTodo(): void {
    //const inputTodo = document.querySelector('#addTodo input') as HTMLInputElement
    const inputTodo = <HTMLInputElement> document.querySelector('#addTodo input')
    listaTodo.push(new Todo(inputTodo?.value))
    printTodos();
}

function printTodos(): void {
    let ul = document.querySelector('#listaTodo ul');
    if(ul !== null){
        ul.innerHTML = ""; 
    }
    
    listaTodo.forEach((t,i) => {
        const li = document.createElement('li')
        //li.setAttribute('class', t.complete)
        li.className = t.complete + ' list-group-item d-flex justify-content-between';
        li.innerHTML = `${t.id} - ${t.txt} 
                        <span>${t.data.getDate()}/${t.data.getMonth()+1}</span> 
                        <span>
                            <button type="button" class="btn btn-danger" onclick="removeTodo(${i})">x</button>
                            <button type="button" class="btn btn-warning" onclick="completeTodo(${i})">o</button>
                        </span>`;
        ul?.appendChild(li);
    })
}

function removeTodo(index: number): void {
    listaTodo.splice(index, 1);
    printTodos();
}

function completeTodo(index: number): void {
    const todo = listaTodo[index];
    todo.complete = todo.complete === 'complete' ? '' : 'complete'
    printTodos();
}