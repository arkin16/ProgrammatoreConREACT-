"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* --------- Ripasso ----------*/
class Test {
    constructor(txt) {
        this.txt = txt;
    }
}
const t = new Test('Test');
class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
function Printobj(o) {
    //console.log(o.name + ' ' + o.lastname)
}
Printobj({ name: "Mario", lastname: "Rossi" });
let obj = { name: "Mario", lastname: "Rossi", city: "Roma" };
Printobj(obj);
class Veicolo {
    constructor(nome, modello, age) {
        this.nome = nome;
        this.modello = modello;
        this.age = age;
    }
    incrementaAge() {
        this.age++;
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
class Orologio {
    constructor(display) {
        this.display = display;
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
let v = new Veicolo('500', 'Fiat', 1);
let s = new Smartphone('IPhone', '14', 64);
let o = new Orologio('6"');
let arr = [v, s, o];
arr.forEach(ele => {
    //console.log(ele.aggiorna())
});
/* ---------------- Nuova Lezione ------------------- */
// Function
// Javascript Version
function jsfunc(x, y) { return x + y; }
jsfunc(25, 'abc');
jsfunc(25, 10);
jsfunc('test', 'abc');
jsfunc(25, true);
function tsfunc(x, y) {
    return x + y;
}
tsfunc(25, 'abc');
tsfunc(25, 10);
tsfunc('test', 'abc');
//tsfunc(25, true) //Errore
// Destrutturazione
const vobj = new Veicolo('Panda', 'Fiat', 1);
const { nome, modello, age } = vobj;
console.log(nome);
console.log(modello);
const Myarr = [{ myName: 'John', myLastName: 'Smith' }, { myName: 'Robert', myLastName: 'Doe' }];
const [Myobj1, Myobj2] = Myarr;
console.log(Myobj1);
console.log(Myobj2);
console.log(...Myarr);
let newArr = [...Myarr, { myName: 'Mary', myLastName: 'Sdoh' }];
console.log(newArr);
// Classi
/* class JSClass {
    constructor(txt) {
        this.txt = txt;
    }
} */
class TSClass {
    constructor(txt) {
        this.getTsProperty = () => {
            return this.test + '_' + this.txt;
        };
        this.txt = txt;
        this.admin = false;
    }
}
class TSClassChild extends TSClass {
    constructor() {
        super(...arguments);
        this.getTest = () => console.log(this.test); // Public
        //getTxt = () => console.log(this.txt); // Private
        this.getAdmin = () => console.log(this.admin); // Protected
    }
}
let tc = new TSClass('Test Class Typescript');
let tc2 = new TSClass('Test 2');
let tcc = new TSClassChild('Test Class Child Typescript');
tc.test = 1;
console.log(tc);
console.log(tcc);
// static
class Automobile {
    constructor(modello, marca, anno) {
        this.modello = modello;
        this.marca = marca;
        this.anno = anno;
        Automobile.count++;
    }
}
Automobile.count = 0;
let a1 = new Automobile('Panda', 'Fiat', 1990);
let a2 = new Automobile('500', 'Fiat', 2020);
let a3 = new Automobile('Panda', 'Fiat', 1990);
console.log(Automobile.count);
// Incapsulamento Ereditarietà Polimorfismo
class TestVeicolo {
    constructor(modello, marca, anno) {
        this.getModello = () => { return this.modello; };
        this.getMarca = () => { return this.marca; };
        this.getAnno = () => { return this.anno; };
        this.setModello = (modello) => { this.modello = modello; };
        this.setMarca = (marca) => { this.marca = marca; };
        this.setAnno = (anno) => {
            if (anno < (new Date()).getFullYear()) {
                this.anno = anno;
            }
        };
        this.start = () => {
            console.log('Start... ');
        };
        this.modello = modello;
        this.marca = marca;
        this.anno = anno;
    }
}
/* const objTestVeicolo = new TestVeicolo('Panda', 'Fiat', 1990);
// objTestVeicolo.anno = 2025;
objTestVeicolo.setAnno(2022);
console.log(objTestVeicolo); */
class TestAuto extends TestVeicolo {
    constructor(modello, marca, anno, porte) {
        super(modello, marca, anno);
        this.getPorte = () => { return this.porte; };
        this.speedup = () => {
            console.log('Speedup Auto... ');
        };
        this.porte = porte;
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
class TestMoto extends TestVeicolo {
    constructor(modello, marca, anno, bauletto) {
        super(modello, marca, anno);
        this.getBauletto = () => { return this.bauletto; };
        this.setBauletto = (bauletto) => { this.bauletto = bauletto; };
        this.speedup = () => {
            console.log('Speedup Moto... ');
        };
        this.bauletto = bauletto;
    }
}
//const objTestVeicolo = new TestVeicolo('R1', 'Yamaha', 1998)
const objTestAuto = new TestAuto('Panda', 'Fiat', 1990, 5);
const objTestMoto = new TestMoto('Panda', 'Fiat', 1990, false);
const arrVeicoli = [];
arrVeicoli.push(objTestAuto);
arrVeicoli.push(objTestMoto);
arrVeicoli.forEach(ele => {
    ele.speedup();
});
// Variabili Parametriche
class TestVarParam {
    constructor(id, txt) {
        this.id = id;
        this.txt = txt;
        this.id = id;
        this.txt = txt;
        this.type = "Variabili Parametriche";
    }
}
let tvp = new TestVarParam(1, 'Prova Variabili Parametriche');
console.log(tvp.type);
// Generics
/*
function genFunc(x: number, y: number) { console.log(x, y); }
function genFunc2(x: string, y: string) { console.log(x, y); }
function genFunc3(x: number, y: string) { console.log(x, y); }
*/
/*
function genFunc(x: number, y: number): number;
function genFunc(x: number, y: string): string;
function genFunc(x: string, y: number): string;
function genFunc(x: string, y: string): string;
function genFunc(x: any, y: any): any {
    return x + y;
}
*/
function genFunc(x, y) {
    console.log(x, y);
}
genFunc('abc', 25);
genFunc(true, ['ciao']);
genFunc(5, 10);
class GenericsClass {
}
let objGenerics = new GenericsClass();
objGenerics.param1 = 'ciao';
let objGenerics2 = new GenericsClass();
objGenerics2.param1 = 25;
let arrUsers = [];
const urlAPI = 'https://jsonplaceholder.typicode.com/users/';
fetch(urlAPI)
    .then(response => response.json())
    .then(json => {
    arrUsers = json;
    console.log(arrUsers);
});
// Pattern Sigleton
class Sigleton {
    constructor() { }
    static getInstance() {
        if (!Sigleton.instance) {
            Sigleton.instance = new Sigleton();
        }
        return Sigleton.instance;
    }
}
let sing = Sigleton.getInstance();
