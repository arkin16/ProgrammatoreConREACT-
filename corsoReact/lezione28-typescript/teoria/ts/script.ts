/* --------- Ripasso ----------*/
class Test {
    txt: string;
    constructor(txt: string) {
        this.txt = txt;
    }
}

const t: Test = new Test('Test');

class User {
    name: string;
    lastname: string;
    constructor(name: string, lastname: string) {
        this.name = name;
        this.lastname = lastname;
    }
}

interface IUser {
    name: string;
    lastname: string;
    city?: string;
}

function Printobj(o: IUser){
    //console.log(o.name + ' ' + o.lastname)
}

Printobj({name: "Mario", lastname: "Rossi"})
let obj  = {name: "Mario", lastname: "Rossi", city:"Roma"}
Printobj(obj)



interface INavigatore {
    accendi(): void;
    impostaMappa(city: string): void;
    aggiorna(): void;
}

class Veicolo implements INavigatore {
    nome: string;
    modello: string;
    age: number;
    constructor(nome:string, modello: string, age: number) {
        this.nome = nome;
        this.modello = modello;
        this.age = age;
    }
    
    incrementaAge(): void {
        this.age++;
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

class Orologio implements INavigatore {
    display: string;
    constructor(display: string) {
        this.display = display;
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

let v = new Veicolo('500', 'Fiat', 1);
let s = new Smartphone('IPhone', '14', 64);
let o = new Orologio('6"');

let arr: INavigatore[] = [v, s, o]
arr.forEach(ele => {
    //console.log(ele.aggiorna())
})


/* ---------------- Nuova Lezione ------------------- */

// Function

// Javascript Version
function jsfunc(x: any, y: any) { return x+y; }

jsfunc(25, 'abc')
jsfunc(25, 10)
jsfunc('test', 'abc')
jsfunc(25, true)

// Typescript Version
function tsfunc(x: number, y: number): number;
function tsfunc(x: number, y: string): string;
function tsfunc(x: string, y: number): string;
function tsfunc(x: string, y: string): string;
function tsfunc(x: any, y: any): any {
    return x + y;
}

tsfunc(25, 'abc')
tsfunc(25, 10)
tsfunc('test', 'abc')
//tsfunc(25, true) //Errore

// Destrutturazione

const vobj = new Veicolo('Panda', 'Fiat', 1);

const {nome, modello, age} = vobj;

console.log(nome)
console.log(modello)

interface IMyObj {myName: string, myLastName: string}
const Myarr: IMyObj[]  = [{myName: 'John', myLastName: 'Smith'}, {myName: 'Robert', myLastName: 'Doe'}]

const [Myobj1, Myobj2] = Myarr
console.log(Myobj1)
console.log(Myobj2)

console.log(...Myarr)
let newArr = [...Myarr , {myName: 'Mary', myLastName: 'Sdoh'}]
console.log(newArr)


// Classi

/* class JSClass {
    constructor(txt) {
        this.txt = txt;
    }
} */

class TSClass {
    private txt: string;
    public test!: number;
    protected admin: boolean
    
    constructor(txt: string) {
        this.txt = txt;
        this.admin = false;
    }

    public getTsProperty = () => {
        return this.test + '_' + this.txt
    }
}

class TSClassChild extends TSClass {
    getTest = () => console.log(this.test); // Public
    //getTxt = () => console.log(this.txt); // Private
    getAdmin = () => console.log(this.admin); // Protected
}

let tc: TSClass = new TSClass('Test Class Typescript');
let tc2: TSClass = new TSClass('Test 2');
let tcc: TSClassChild = new TSClassChild('Test Class Child Typescript')
tc.test = 1;
console.log(tc)
console.log(tcc)


// static

class Automobile {
    modello: string;
    marca: string;
    anno: number;
    static count: number = 0;
    constructor(modello: string, marca: string, anno: number) {
        this.modello = modello;
        this.marca = marca;
        this.anno = anno;
        Automobile.count++;
    }
}

let a1 = new Automobile('Panda', 'Fiat', 1990);
let a2 = new Automobile('500', 'Fiat', 2020);
let a3 = new Automobile('Panda', 'Fiat', 1990);

console.log(Automobile.count);

// Incapsulamento Ereditarietà Polimorfismo

abstract class TestVeicolo {
    private modello: string;
    private marca: string;
    private anno: number;

    constructor(modello: string, marca: string, anno: number) {
        this.modello = modello;
        this.marca = marca;
        this.anno = anno;
    }

    getModello = () => { return this.modello; }
    getMarca = () => { return this.marca; }
    getAnno = () => { return this.anno; }

    setModello = (modello: string) => { this.modello = modello }
    setMarca = (marca: string) => { this.marca = marca }
    setAnno = (anno: number) => { 
        if(anno < (new Date()).getFullYear()) {
            this.anno = anno
        }
    }

    start = () => {
        console.log('Start... ');
    }

    /* speedup = () => {
        console.log('Speedup... ');
    } */

    abstract speedup(): void;
}

/* const objTestVeicolo = new TestVeicolo('Panda', 'Fiat', 1990);
// objTestVeicolo.anno = 2025;
objTestVeicolo.setAnno(2022);
console.log(objTestVeicolo); */

class TestAuto extends TestVeicolo implements INavigatore {
    
    private porte: number;

    constructor(modello: string, marca: string, anno: number, porte: number) {
        super(modello, marca, anno)
        this.porte = porte
    }
    

    getPorte = () => { return this.porte; }

    speedup = () => {
        console.log('Speedup Auto... ');
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

class TestMoto extends TestVeicolo {
    private bauletto: boolean

    constructor(modello: string, marca: string, anno: number, bauletto: boolean) {
        super(modello, marca, anno)
        this.bauletto = bauletto
    }

    getBauletto = () => { return this.bauletto; }
    setBauletto = (bauletto: boolean) => {this.bauletto = bauletto}

    speedup = () => {
        console.log('Speedup Moto... ');
    }
}

//const objTestVeicolo = new TestVeicolo('R1', 'Yamaha', 1998)
const objTestAuto = new TestAuto('Panda', 'Fiat', 1990, 5);
const objTestMoto = new TestMoto('Panda', 'Fiat', 1990, false);

const arrVeicoli: TestVeicolo[] = []
arrVeicoli.push(objTestAuto)
arrVeicoli.push(objTestMoto)

arrVeicoli.forEach(ele => {
    ele.speedup()
})


// Variabili Parametriche

class TestVarParam {
    /* private id: number;
    private txt: string; */
    readonly type: string;
    constructor(private id: number, private txt: string) {
        this.id = id;
        this.txt = txt;
        this.type = "Variabili Parametriche"
    }
}

let tvp = new TestVarParam(1, 'Prova Variabili Parametriche')
console.log(tvp.type)



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

/* function getFuncSol1(x: string, y: number): void {
    console.log(x, y);
}
function getFuncSol2(x: boolean, y: string[]): void {
    console.log(x, y);
}
function getFuncSol3(x: number, y: number): void {
    console.log(x, y);
}

getFuncSol1('abc', 25);
getFuncSol2(true, ['ciao']);
getFuncSol3(5,10); */


function genFunc<T, U>(x: T, y: U): void { 
    console.log(x, y); 
}

genFunc<string, number>('abc', 25);
genFunc<boolean, string[]>(true, ['ciao']);
genFunc<number, number>(5,10);

class GenericsClass<I extends TestVeicolo, T, K> {
    param1!: I;
    param2!: T;
    param3!: K;
}

let objGenerics = new GenericsClass<TestAuto, number, boolean>()
objGenerics.param1 = objTestAuto;

let objGenerics2 = new GenericsClass<TestMoto, string, boolean>()
objGenerics2.param1 = objTestMoto;


// Generics nelle chiamate AJAX

import { Company } from "./company";
import Address from "./address";

interface IUserAjax {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

let arrUsers: IUserAjax[] = [];

const urlAPI = 'https://jsonplaceholder.typicode.com/users/';

fetch(urlAPI)
    .then(response => response.json())
    .then(json => {
        arrUsers = <IUserAjax[]> json;
        console.log(arrUsers);
    })



// Pattern Sigleton

class Sigleton {

    private static instance: Sigleton;

    private constructor() {}

    public static getInstance(): Sigleton {
        
        if(!Sigleton.instance) {
            Sigleton.instance = new Sigleton();
        } 
        
        return Sigleton.instance
        
    }
}

let sing = Sigleton.getInstance()