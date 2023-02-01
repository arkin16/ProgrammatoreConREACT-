// console.log(testoVar); // undefined
// console.log(testoLet); // Error - Cannot access 'testoLet' before initialization
// console.log(testoCONST); // Error - Cannot access 'testoCONST' before initialization

var testoVar = 'Variabile VAR';
let testoLet = 'Variabile LET';
const testoCONST = 'Costante CONST';

testoVar = 'Nuova - ' + testoVar; 
testoLet = 'Nuova - ' + testoLet;
// testoCONST = 'Nuova - ' + testoCONST; // Assignment to constant variable.

var testoVar = 'Altra Variabile VAR';
// let testoLet = 'Altra Variabile LET'; // Identifier 'testoLet' has already been declared
// const testoCONST = 'Altra Costante CONST'; // Identifier 'testoCONST' has already been declared

{
    var testoVarBlocco = 'Variabile VAR di blocco';
    let testoLetBlocco = 'Variabile LET di blocco';
    const testoCONSTBlocco = 'Costante CONST di blocco';

    // console.log(testoVarBlocco);
    // console.log(testoLetBlocco);
    // console.log(testoCONSTBlocco);
}

// console.log(testoVarBlocco);
// console.log(testoLetBlocco); // Error - testoLetBlocco is not defined
// console.log(testoCONSTBlocco); // Error - testoCONSTBlocco is not defined

/********************************************************************************/

let str = "Sono una Stringa";
let num = 16;
let bol = true;
let und = undefined;

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(bol));
// console.log(typeof(und));

let risp = str + ' lunga ' + num + ' caratteri? ' + bol;
// console.log(risp);

/********************************************************************************/

let num1 = prompt('Inserisci un "numero"', 15);
let num2 = prompt('Inserisci un altro "numero"');

console.log(num1, num2);

// num1 * 1;
// parseInt(num1);
// Number(num1);
// +num1

let somma = (+num1) + (+num2);
let sottrazione = num1 - num2;
let moltiplicazione = num1 * num2;
let divisione = num1 / num2;

console.log(somma);
console.log(sottrazione);
console.log(moltiplicazione);
console.log(divisione);

// let numPari = num1 % 2 === 0;
console.log(num1 + ' è un valore pari? ' + (num1 % 2 === 0));
