const urlAPI = "https://jsonplaceholder.typicode.com/users/";
let userList = [];
let promise = fetch(urlAPI, { method: "GET" }).then((response) => response.json() );

document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelector('#myForm button');
    addBtn.addEventListener("click", addContact);
    promise.then(res => { 
        userList = res;
        printTable(userList);
    })
});

function printTable(arr) {
  let tbody = document.querySelector("#myTable tbody");
  tbody.innerHTML = '';
  for (ele of arr) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
                    <th scope="row">${arr.indexOf(ele)+1}</th>
                    <td>${ele.name}</td>
                    <td>${ele.username}</td>
                    <td>${ele.address.city}</td>
                    <td>
                        <button type="button" class="btn btn-outline-warning btn-sm" onclick="printCard(${ele.id})"><i class="bi bi-info-square" ></i></button>
                        <button type="button" class="btn btn-outline-danger btn-sm" onclick="removeContact(${ele.id})"><i class="bi bi-trash-fill" ></i></button>
                    </td>
                    `;
    tbody.appendChild(tr);
  }
}

function printCard(id) {
    let page = document.querySelector('#myPage');
    let obj = userList.find(ele => ele.id === id);
    let card = document.createElement('div');
    card.className = 'col-sm';
    card.id = "cardDetail";
    card.innerHTML = `<div class="card">
                        <div class="card-header">
                            Detail Contact
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">${obj.name}</h3>
                            <p class="card-text">City: ${obj.address.city}</p>
                            <p class="card-text">Phone: ${obj.phone}</p>
                            <p class="card-text">Email: ${obj.email}</p>
                            <button type="button" class="btn btn-outline-secondary" onclick="removeCard()">Close</button>
                        </div>
                        </div>
                        `
    page.appendChild(card);
}

function removeCard() {
    let page = document.querySelector('#myPage');
    let card = document.querySelector('#cardDetail');
    page.removeChild(card);
}

function removeContact(id) {
    fetch(urlAPI+id, { method: 'DELETE'})
            .then(response => response.json())
            .then(res => {
                userList = userList.filter(ele => ele.id !== id);
                printTable(userList);
            })
            .catch(error => console.log(error))

    /* let obj = userList.find(ele => ele.id === id);
    let index = userList.indexOf(obj);
    userList.splice(index, 1); */

    /* let index = userList.findIndex(ele => ele.id === id);
    userList.splice(index, 1); */

    /* userList = userList.filter(ele => ele.id !== id);
    printTable(userList); */
}

function addContact() {
    let name = document.querySelector('#myForm input[name="name"]').value;
    let username = document.querySelector('#myForm input[name="username"]').value;
    let city = document.querySelector('#myForm input[name="city"]').value;
    let phone = document.querySelector('#myForm input[name="phone"]').value;
    let email = document.querySelector('#myForm input[name="email"]').value;
    let obj = {
        name: name, 
        username: username, 
        address: {city: city}, 
        phone: phone, 
        email: email
    };
    
    fetch(urlAPI, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'},
    })
  .then((response) => response.json())
  .then((newObj) => {
    userList.push(newObj);
    printTable(userList);
    clearField();
  });
}

function clearField() {
    document.querySelector('#myForm input[name="name"]').value = '';
    document.querySelector('#myForm input[name="username"]').value = '';
    document.querySelector('#myForm input[name="city"]').value = '';
    document.querySelector('#myForm input[name="phone"]').value = '';
    document.querySelector('#myForm input[name="email"]').value = '';
}