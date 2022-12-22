let url = 'https://jsonplaceholder.typicode.com/users/';
let promise = fetch(url).then(get => get.json());
let arrU = [];

const div = document.getElementById("cont");
const subTable = document.getElementById("subifo");

document.addEventListener('DOMContentLoaded', () => {
    promise.then(resp => {
        arrU = resp;
        print()
    });
});

function print(){
    div.innerHTML = pritListofUser(arrU);
}

function pritListofUser(arrU){
    const users = arrU.map( (user) => ` 
                                        <tr>
                                            <td>${user.name}</td>
                                            <td>${user.username}</td>
                                            <td>${user.email}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn" onclick="setIndex(${user.id})">Info</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn-close" aria-label="Close"></button>
                                            </td>
                                        </tr>`).join("");
return `${users}`;                                        
}

function setIndex(id){
    subTable.innerHTML = printInfoE(id);
}

function printInfoE(id){
    let objtmp = arrU.find(obj => obj.id === id);

    const subtable = ` 
                         <tr>

                             <td>${objtmp.name}</td>
                             <td>${objtmp.address.city}</td>
                             <td>${objtmp.address.street}</td>
                             <td>${objtmp.phone}</td>

                         <tr>`;    

    return `${subtable}`;
}

