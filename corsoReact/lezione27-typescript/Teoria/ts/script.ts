// string number boolean undefined null || object Array(object)

// string number boolean

let n: number;
let s: string;
let b: boolean;
let a: any; // Sconsigliato!!!
let arrStr: string[];
let arrNum: Array<number>;
let tup: [string, number];

enum giorni {
    LUNEDI,
    MARTEDI,
    MERCOLEDI,
    GIOVEDI,
    VENERDI,
    SABATO, 
    DOMENICA
}

class Animal {
    name: string;
    type: string;
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

let gg: giorni;
let bobby: Animal | null;

function testSum(x: number, y: number): number {
    return x+y;
}
testSum(25, 12);

function testFunc(s: string): void {
    console.log(s);
}
let returnFuncTest = testFunc('Test');
console.log(returnFuncTest);

let u: string | number ; // Union

type mioTipo = string | Animal; // Custom Type
let mt: mioTipo;

// Accesso al DOM

let test = 'ciao'
console.dir(document);
let h1 = document.querySelector('.container h1') as HTMLElement | null;
let p = <HTMLElement | null> document.querySelector('.container p');
let txtInput = document.querySelector('.container input[name="txt"]') as HTMLInputElement | null;

if(h1 !== null && p !== null){
    h1.style.color = 'red';
    p.style.color = 'green';
}

console.log(txtInput?.value);



// Paradigmi OOP

class Veicolo implements INavigatore {
    nome: string;
    modello: string;
    age: number;
    constructor(nome:string, modello: string, age: number) {
        this.nome = nome;
        this.modello = modello;
        this.age = age;
    }
    aggiorna(): void {
        console.log('Navigatore aggiornato!!!');
    }
    incrementaAge() {
        this.age++;
    }
    accendi(): void {
        console.log('Navigatore Acceso');
    }
    impostaMappa(city: string): void {
        console.log('Mappa impostata ' + city);
    }
}

class Automobile extends Veicolo {
    porte: number;
    constructor(nome:string, modello: string, age: number, porte: number){
        super(nome, modello, age);
        this.porte = porte;
    }
}

class Smartphone implements INavigatore {
    nome: string;
    modello: string;
    memoria: number;
    constructor(nome: string, modello: string, memoria: number){
        this.nome = nome;
        this.modello = modello;
        this.memoria = memoria;
    }
    aggiorna(): void {
        console.log('Navigatore aggiornato!!!');
    }
    accendi(): void {
        console.log('Navigatore Acceso');
    }
    impostaMappa(city: string): void {
        console.log('Mappa impostata ' + city);
    }
}

interface INavigatore {
    accendi(): void;
    impostaMappa(city: string): void;
    aggiorna(): void;
}

let us = new Veicolo('500', 'Fiat', 1);
let sm = new Smartphone('IPhone', '14', 64);


let arr: INavigatore[] = [us, sm];
arr.forEach(ele => {
    console.log(ele)
    ele.aggiorna();
});


// Interface Typescript

class MyObj {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

interface IMyObj {
    name: string,
    city?: string,
    [propName: string]: any
}

/* const o: MyObj = new MyObj('Mario Rossi'); */
let o: IMyObj = {name: 'Mario Rossi'}
let op: IMyObj = {name: 'Luigi Bianchi', city: 'Roma'}
let po: IMyObj = {name: 'Luigi Bianchi', city: 'Roma', email: 'lb@example.com'}
let oop: IMyObj = {name: 'Francesca Neri', phone: '123456789'}

function TestObj(obj: IMyObj) {
    console.log(obj)
}

TestObj(o)
TestObj({name: 'Giuseppe Verdi'})