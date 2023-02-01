// Destrutturazione di un Array

let arr = ['Giuseppe', 'Verdi'];

//console.log(arr[0])

/* let n = arr[0];
let l = arr[1]; */

let [n, l] = arr;

console.log(n); // 'Giuseppe'
console.log(l); // 'Verdi'

// Destrutturazione di un Oggetto

let obj = {name: 'Mario', lastname: 'Rossi', city: 'Roma'};

/* let name = obj.name;
let lastname = obj.lastname; */

let {lastname, pippo, name } = obj;

console.log(pippo); // undefined
console.log(name) // 'Mario'
console.log(lastname); // 'Rossi'

let {name: nome, lastname: cognome} = obj;

console.log(nome) // 'Mario'
console.log(cognome); // 'Rossi'

let {city} = obj;

console.log(city);


/* const length = 5;
let arrPage = new Array(length); // [undefined, undefined, undefined, undefined, undefined]
let objKeys = arrPage.keys(); // {0, 1, 2, 3, 4}
let arrPage = Array.from(objKeys); [0, 1, 2, 3, 4]

Array.from(Array(length).keys()); */