/* function test(e) {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    console.log(email, password);
} */

function func(e) {
    console.log(e);
}

/*console.dir(document);

let btn = document.querySelector('#btn2');
btn.onclick = func;

let btnListner = document.querySelector('#btn3');
btnListner.addEventListener('click', func)

let email = document.querySelector('#email');
email.addEventListener('change', testEmail)

let pass = document.querySelector('#password');
pass.addEventListener('change', testPassword)

let age = document.querySelector('#age');
age.addEventListener('change', testAge);

function testEmail() {
    if(email.value.length < 5) {
        document.querySelector('#error').innerHTML = '<div class="alert alert-danger" role="alert">Email non valida!!!</div>';
    } else {
        console.log('Email OK!!!!!!!!!!!!');
    }
} 

function testPassword() {
    if(pass.value.trim() === '' && pass.value.trim().length >= 6) {
        document.querySelector('#errorpass').innerHTML = '<div class="alert alert-danger" role="alert">Password non valida!!!</div>';
    }
}

function testAge() {
    if(age.value.trim() === '' && typeof(age.value) === 'number') {}
}
*/

// JSON format

let arr = [
    { 
        name: 'Mario',
        lastname: 'Super',
        city: 'San Francisco'
    }, {
        name: 'John',
        lastname: 'Smith',
        city: 'London'
    }, {
        name: 'Mario',
        lastname: 'Rossi',
        city: 'Roma'
    }
];

let j = JSON.stringify(arr);
//console.log(j);

let arrObj = JSON.parse(j);
//console.log(arrObj);


// Ajax format
// GET POST PUT/PATH DELETE

/* let url = 'https://jsonplaceholder.typicode.com/users/';
let xhr = new XMLHttpRequest();

// GET -> lettura di dati da un server
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
    }
} */


// GET -> lettura di un Oggetto
/* xhr.open('GET', url+5);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
    }
} */


// POST -> invio di dati ad un server
/* let u = { 
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

let json = JSON.stringify(u);

xhr.open('POST', url);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// PUT -> modifica completa di dati su un server
/* let u = { 
    id: 2,
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

let json = JSON.stringify(u);

xhr.open('PUT', url+2);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// PATCH -> modifica parziale di dati su un server

/* let u = { 
    email : "m.rossi@gmail.com",
}

let json = JSON.stringify(u);

xhr.open('PATCH', url+2);
xhr.send(json)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */

// DELETE -> eleiminare un dato dal server
/* xhr.open('DELETE', url+2);
xhr.send()
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);        
    }
} */



// PROMISE

let users = [];

let url = 'https://jsonplaceholder.typicode.com/users/';
/* let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let data = xhr.responseText;
        let mioArr = JSON.parse(data);
        console.log(mioArr);
        users = mioArr;
    }
}

console.log(users); */




// GET Fetch
/* url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url, {method: 'GET'})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message)) */

// POST fetch

/* let u = { 
    email : "m.rossi@gmail.com",
    name : "Mario Rossi",
    phone : "1-770-736-8031 x56442",
    username : "Rossino",
    website : "mrossi.org"
}

fetch(url, {
            method: 'POST', 
            body: JSON.stringify(u),
            headers: {
                    'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message)) */

// PUT fetch

/* fetch(url+2, { 
            method: 'PUT', 
            body: JSON.stringify(u),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message)) */

// PATCH fetch
/* fetch(url+2, { 
            method: 'PATCH', 
            body: JSON.stringify({ email : "m.rossi@gmail.com" }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
    }})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message)) */


// DELETE fetch
/* fetch(url+2, { method: 'DELETE'})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => alert(err.message)) */

/* let p = fetch(url).then(response => response.json());

document.addEventListener('DOMContentLoaded', () => {
    let titolo = document.querySelector('.container h1');
    p.then(users => {
         titolo.innerHTML = 'Numero di risultati: ' + users.length;         
    });
}) */


let entrate =   [99, 32, 61, 54, 10];
let spese =     [65, 15, 61, 39, 9];

//              [34, 17, 0, 15, 1]

let residuo = [];

for (let i = 0; i <entrate.length; i++) {
    let r = entrate[i] - spese[i];
    residuo.push(r);
}


let res = entrate.map((ele, i) => ele - spese[i])


console.log(entrate);
console.log(spese);
console.log(residuo);
console.log(res);


let arrUsers = [
    { 
        id: 1,
        name: 'Mario',
        lastname: 'Super',
        city: 'San Francisco'
    }, {
        id: 2,
        name: 'John',
        lastname: 'Smith',
        city: 'London'
    }, {
        id: 3,
        name: 'Mario',
        lastname: 'Rossi',
        city: 'Roma'
    }
];


arrUsers.forEach(ele => console.log(ele) )

let arrName = arrUsers.map(ele => ele.name + '!!!')
console.log(arrName);

let arrFilter = arrUsers.filter(ele => ele.name === 'Mario');
console.log(arrFilter);

let obj = arrUsers.find(ele => ele.id === 1);
console.log(obj);

let index = arrUsers.findIndex(ele => ele.id === 1);
console.log(index);

spese = [65, 15, 61, 39, 9];
let tot = spese.reduce((acc, val) => acc+val , 0);
console.log(tot);

