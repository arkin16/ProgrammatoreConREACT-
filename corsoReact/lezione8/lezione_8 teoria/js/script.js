alert('Ciao a tutti!!');
console.log('Ciao a tutti!!');
document.write('Ciao a tutti!!');
let p = prompt("Inserisci il nome");
let c = confirm('Ti piace Javascript?');


document.write('Ciao a tutti!! <br>');

// Variabili

var test; // Dichiarazione di Variabile
test = "Ciao a tutti"; // Inizializzazione di una Variabile

var test2 = "Ciao a tutti"; // Dichiarazione ed Inizializzazione di una Variabile

// Valori di tipo primitivo String | Number | Boolean | undefined

var str = 'Ciao a tutti';
var num = 25;
var bol = true;
var und;

var tot = 15 + num;
var strt = str + '!!!';

/* console.log(typeof str);
console.log(typeof num);
console.log(typeof bol);
console.log(typeof und); */

// Caratteristiche di var

// console.log(pippo); // output: undefined
var pippo = 'Sono pippo';
// console.log(pippo); // output: Sono pippo

// console.log(testLocale); // output: undefined
{
    var testLocale = "Sono locale al blocco";
    // console.log(testLocale); // output: Sono locale al blocco


    var testLocale = "Sono un'altra var locale al blocco";
}

// console.log(testLocale); // output: Sono locale al blocco

var testo = "Sono Globale!";
function func(){
    console.log(testo); // undefined
    testo = "Sono Globale!!!";
    console.log(testo); // Sono Globale!!!
    altro_testo = "Sono ancora Globale";
    console.log(altro_testo); // Sono ancora Globale
    var testo = "Sono locale al blocco";
    console.log(testo); // Sono locale al blocco
    var testo_locale = "locale!!!";
    function innerFunc() {
        console.log(testo); // undefind
        var testo = "Sono locale a innerFunc";
        console.log(testo); // Sono locale a innerFunc
    }innerFunc()
    console.log(testo); // Sono locale al blocco
}func();


console.log(testo); // Sono Globale!
// console.log(testo_locale) // errore
// console.log(altro_testo) // errore

// Let e Const

let myStr = "Ciao a tutti";
let myNum = 25;
let myBol = true;
let myUnd;

myStr = "abc";

{
    let pippo = 'sono locale al blocco';
    console.log(pippo);
}

let varTest = 'sono una variabile';
console.log(varTest);

varTest = 52;
console.log(varTest);

varTest = true;
console.log(varTest);

const COSTANTE = 10;
console.log(COSTANTE);

COSTANTE = 3;

let x = 25;
let y = 10;

let sum = x + y;
let diff = x - y;
let div = x / y;
let mol = x * y;
let resto = x % y;

x = x + 5;
x += 5;
console.log(x);

let tx1 = "Ciao ";
let tx2 = "a tutti";
let tx3 = tx1 + tx2;
tx1 += tx2;

let op1 = 25;
let op2 = "25";

console.log(op1 === op2);
console.log(op1 !== op2);

op1 > op2;
op1 < op2;
op1 >= op2;
op1 <= op2;

console.log(op1 === op2 && op1 < 30);
console.log(op1 === op2 || op1 < 30);
console.log(!(op1 === op2))