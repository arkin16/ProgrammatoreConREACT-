// Operatore Ternario
// let x = (condizione) ? 'valore a' : 'valore b';

let x = 19;
let y = (x > 18) ? 'Maggiorenne' : 'Minorenne';

// console.log(y);

// Funzioni

// Dichiarazioni di funzione
function func1() {
    // corpo della funzione
    console.log("func1");
}

// Funzioni Espressione
let func2 = function() {
    // corpo della funzione
    console.log("func2");
}

// Funzioni a chiamata immediata
let nome = (function() {
    return 'Mario Rossi';
}())

// Return di una funzione
function returnFunc() {
    let num1 = prompt('Inserisci un numero');
    let num2 = prompt('Inserisci un numero');
    let result = +num1 + +num2;
    //console.log(result);
    return result;
}

// Funzioni parametriche
function somma(num1, num2) {
    // let num1 = 15;
    // let num2 = 25;
    let result = num1 + num2;
    console.log(result);
} 

function sommaMultipla() {
    console.log(arguments.length);
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        // res = res + arguments[i];
        res += arguments[i];
    }
    return res;
}

// Closure
let val0 = 'Start';
function closureFunc(p1) {
    let val1 = 'Test';
    // console.log(val0);
    // console.log(val1);
    function internalFunc(p2) {
        let val2 = 'internalTest';
        console.log(val0);
        console.log(val1);
        console.log(val2);
        console.log(p1);
        console.log(p2);
        // return val2;
    }
    return internalFunc;
}

function login() {
    let name = 'Mario Rossi';
    let adminUsername = 'admin';
    let adminPassword = '12345';
    function internalLogin(username, password) {
        if(adminUsername === username && adminPassword === password) {
            console.log('Ciao ' + name); 
        } else {
            console.log('Credenziali errate!!!!');
        }
    }
    return internalLogin;
}


// Arrow Function
let arrowFunc1 = () => {
    return "Sono una funzione!!!";
}
let arrowFunc2 = () => "Sono una Arrow Function!!!";
let arrowFunc3 = x => "Sono una Arrow Function!!! " + x;



//let loginFunc = login();
//loginFunc('admin', '12345');
login()('admin', '12345');

//closureFunc(10)(20);
/* let func = closureFunc();
func(); */
// console.log(func);


// func1();
// func2();
// funcconsole.log(nome);
// let r = returnFunc();
// console.log(result); // Errore
// let r = sommaMultipla(15, 10, 12, 8, 9, 3, 3);
// console.log(r);





// Array

let str = 'String';
let num = 25;
let bol = true;
let und = undefined;
let fun = function() {}

let arr1 = [25, true, 'ciao', undefined];
// let arr2 = new Array();

//console.log(arr1.length);
//console.log(arr1[2])

//arr1[3] = 'altro';
//arr1[40] = 'nuovo';

//console.log(arr1);


let arr = ['abc', 'nuovo', 'array'];
arr.push('primo'); // inserisce un elemento dalla fine
arr.push('secondo');
arr.unshift('terzo'); // inserisce un elemento dall'inizio
arr.pop(); // toglie un elemento dalla fine
arr.shift(); // toglie un elemento dall'inizio
arr.splice(1, 0, 'add', 'ciao', 'uno')

console.log(arr);


// Operatore Ternario
// let x = (condizione) ? 'valore a' : 'valore b';

// Strutto di controllo if/else
// if(condizione) { // esegui queste istruzioni } 
// else { // esegui queste istruzioni }