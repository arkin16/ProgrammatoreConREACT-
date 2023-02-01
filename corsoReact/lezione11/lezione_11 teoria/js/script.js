let str = 'stringa';
let num = 25;
let bol = true;
let und = undefined;

let fun = function() {}
let fnc = () => {}

let arr = [];

let obj = {
    name: 'Mario',
    lastname: 'Rossi',
    age: 34,
    email: 'm.rossi@gmail.com',
    51: 'Ciao a tutti'
}

//console.log(typeof(obj))
//console.log(obj);

//console.log(obj['email']);
//console.log(obj.email);
//console.log(obj[51])

function name(params) {
    
}

function Animal(name, type, abitat, color) {
    this.name = name || '---';
    this.type = type || '---';
    this.abitat = abitat || 'terra';
    this.color = color || 'bianco'

    this.info = function() {
        return this.name + ' ' + this.type + ' ' + this.abitat + ' ' + this.color;
    }
}

class AnimalClass {

    constructor(name, type, abitat, color) {
        this.name = name || '---';
        this.type = type || '---';
        this.abitat = abitat || 'terra';
        this.color = color || 'bianco'
    }

    info = function() {
        return this.name + ' ' + this.type + ' ' + this.abitat + ' ' + this.color;
    }
}


let bobbyClass = new AnimalClass('Bobby','Cane','Terra');
//console.log(bobbyClass)


let bobby = new Animal('Bobby','Cane','Terra');
let bb = new Animal('Bobby','Cane','Terra');

let jerry = new Animal('Jerry','Gatto','Divano');
let tom = new Animal('Tom','Topo');

let willy = new Animal('Willy','Pesce','Acquario');
willy.pinne = 4;

Animal.prototype.attacca = function() { return this.name + ' Mordi!!!'};

//console.log(bobby);
//console.log(jerry.info());
//console.log(tom.info());
//console.log(willy.info());

//console.log(willy.attacca())



// Ereditarietà


class Veicolo {
    constructor(marca, modello, targa) {
        this.marca = marca;
        this.modello = modello;
        this.targa = targa;
    }

    start = function() {
        console.log("Accendi");
    }

    acc = function() {
        console.log("Accellera");
    }

    stop = function() {
        console.log("Frena");
    }
}

class Automobile extends Veicolo {
    constructor(marca, modello, targa, porte, motore) {
        super(marca, modello, targa)
        this.porte = porte;
        this.motore = motore;
    }
}

class Suv extends Automobile {
    constructor(marca, modello, targa, porte, motore, ruoteMotrici) {
        super(marca, modello, targa, porte, motore)
        this.ruoteMotrici = ruoteMotrici;
    }
}


let s = new Suv('BmW', 'X5', '12345', 5, '2800cc', 4);
//s.start();

// Manipolazione del BOM e DOM

/* let interval = setInterval(() => {
    console.log(new Date());
}, 1000)

setTimeout(() => {
    alert('Stop Interval!!!')
    clearInterval(interval);
}, 10000) */

//console.log(window);
//console.dir(document);

let body = document.body;
//console.dir(body);

let div = body.children[1];
//console.dir(div);

let h1 = div.firstElementChild;
//console.log(h1);
h1.style.color = 'green';

let titolo = document.getElementById('titolo');
let ele = document.getElementsByClassName('abc');
let a = document.getElementsByTagName('a');

//console.log(a);
titolo.style.fontSize = '60px';

let sel = document.querySelector('div h2');
titolo = document.querySelector('#titolo');
li = document.querySelector('li.abc');
ele = document.querySelectorAll('li.abc')
//console.log(ele);


let titH1 = document.createElement('h1');
titH1.innerText = 'Nuovo Titolo creato con Javascript';
titH1.style.color = 'red';
titH1.className = 'cc';
titH1.title = 'creato con Javascript';


let container = document.querySelector('.container');

container.appendChild(titH1);


h2 = document.body.firstElementChild;
//h2.style.display = 'none';
document.body.removeChild(h2);


console.log(titH1);
console.dir(titH1);


function pippo() {
    let inp = document.querySelector('#txt');
    console.dir(inp.value);
    //alert('click!!!!')
}
