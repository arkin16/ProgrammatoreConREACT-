"use strict";
// string number boolean undefined null || object Array(object)
// string number boolean
let n;
let s;
let b;
let a; // Sconsigliato!!!
let arrStr;
let arrNum;
let tup;
var giorni;
(function (giorni) {
    giorni[giorni["LUNEDI"] = 0] = "LUNEDI";
    giorni[giorni["MARTEDI"] = 1] = "MARTEDI";
    giorni[giorni["MERCOLEDI"] = 2] = "MERCOLEDI";
    giorni[giorni["GIOVEDI"] = 3] = "GIOVEDI";
    giorni[giorni["VENERDI"] = 4] = "VENERDI";
    giorni[giorni["SABATO"] = 5] = "SABATO";
    giorni[giorni["DOMENICA"] = 6] = "DOMENICA";
})(giorni || (giorni = {}));
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
let gg;
let bobby;
function testSum(x, y) {
    return x + y;
}
testSum(25, 12);
function testFunc(s) {
    console.log(s);
}
let returnFuncTest = testFunc('Test');
console.log(returnFuncTest);
let u; // Union
let mt;
// Accesso al DOM
let test = 'ciao';
console.dir(document);
let h1 = document.querySelector('.container h1');
let p = document.querySelector('.container p');
let txtInput = document.querySelector('.container input[name="txt"]');
if (h1 !== null && p !== null) {
    h1.style.color = 'red';
    p.style.color = 'green';
}
console.log(txtInput === null || txtInput === void 0 ? void 0 : txtInput.value);
// Paradigmi OOP
class Veicolo {
    constructor(nome, modello, age) {
        this.nome = nome;
        this.modello = modello;
        this.age = age;
    }
    aggiorna() {
        console.log('Navigatore aggiornato!!!');
    }
    incrementaAge() {
        this.age++;
    }
    accendi() {
        console.log('Navigatore Acceso');
    }
    impostaMappa(city) {
        console.log('Mappa impostata ' + city);
    }
}
class Automobile extends Veicolo {
    constructor(nome, modello, age, porte) {
        super(nome, modello, age);
        this.porte = porte;
    }
}
class Smartphone {
    constructor(nome, modello, memoria) {
        this.nome = nome;
        this.modello = modello;
        this.memoria = memoria;
    }
    aggiorna() {
        console.log('Navigatore aggiornato!!!');
    }
    accendi() {
        console.log('Navigatore Acceso');
    }
    impostaMappa(city) {
        console.log('Mappa impostata ' + city);
    }
}
let us = new Veicolo('500', 'Fiat', 1);
let sm = new Smartphone('IPhone', '14', 64);
let arr = [us, sm];
arr.forEach(ele => {
    console.log(ele);
    ele.aggiorna();
});
// Interface Typescript
class MyObj {
    constructor(name) {
        this.name = name;
    }
}
/* const o: MyObj = new MyObj('Mario Rossi'); */
let o = { name: 'Mario Rossi' };
let op = { name: 'Luigi Bianchi', city: 'Roma' };
let po = { name: 'Luigi Bianchi', city: 'Roma', email: 'lb@example.com' };
let oop = { name: 'Francesca Neri', phone: '123456789' };
function TestObj(obj) {
    console.log(obj);
}
TestObj(o);
TestObj({ name: 'Giuseppe Verdi' });
