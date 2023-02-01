// Manipolazione di una stringa

let str = 'Ciao a tutti amici, mi chiamo Mario Rossi, il mio codice Fiscale è ABCDEF12345, e sono nato a Roma.';
let str1 = 'Ciao a tutti amici mi chiamo Giuseppe Verdi il mio codice Fiscale è QWERTY987654 e sono nato a Milano.';
let str2 = 'Ciao a tutti amici mi chiamo Francesca Bianchini il mio codice Fiscale è LKJHGF456789 e sono nato a Manfredonia.';
let str3 = new String('Mia stringa');
//console.log(str);

let fi = str.indexOf('t');
let li = str.lastIndexOf('t');
let s = str.search('amici')
let sl = str.slice(-5, -1);
let sb = str.substring(0, 5);
let sbstr = str.substr(5, 10);
let rep = str.replace('a', 'x');
let repa = str.replaceAll('a', 'x');
let lower = str.toLowerCase();
let upper = str.toUpperCase();
let conc = str.concat(' ----------------- '); // str + ' ----------------- '
let tri = str.trim();
let spl = str.split(',')
let tr = str.includes('tutte');

//console.log(sl);
//console.log(sb);
//console.log(sbstr);
//console.log(rep);
//console.log(lower);
//console.log(upper);
//console.log(conc);
//console.log(spl);

//console.log(fi);
//console.log(li);
//console.log(s);
//console.log(str.length);
//console.log(tr);


let position = str.indexOf('è');
//console.log(position);
let cf1 = str.slice(position+2, position+14);
let cf2 = str1.slice(str1.indexOf('è')+2, str1.indexOf('è')+14);
let cf3 = str2.slice(str2.indexOf('è')+2, str2.indexOf('è')+14);
//console.log(cf1);
//console.log(cf2);
//console.log(cf3);



// Manipolazione di un array

let arr = [25, true, 'abc'];
let arr2 = new Array();
arr2[0] = 'arr2';

arr.push('elemento');
arr.pop();
arr.unshift('primo');
arr.shift();
arr.length;
arr.splice(1, 1); // rimuovo un elemento indice 1
arr.splice(1, 1, 'modifico'); // modifica un elemento indice 1
arr.splice(1, 0, 'nuovo'); // aggiungo un elemento indice 1
arr.concat(arr2);
arr.slice(1, 3);
arr.includes('abc');
arr.sort();
arr.reverse();

// console.log(arr);


// Operatori unari

let x = 10;
// x = x + 1;
// x += 1;
// x++;

// let y = x + 1;
// let y = x++;
let y = ++x;

// console.log(x, y);


// Classe Math
let arNum = [25, 14, 78];

let r = Math.random() * 100;
let fr = Math.floor(r);
let cr = Math.ceil(r);
let rr = Math.round(r);
let max = Math.max(...arNum);
let min = Math.min(25, 14, 78);
let absNum = Math.abs(-44);

//console.log(r);
//console.log(fr);
//console.log(cr);
//console.log(rr);
//console.log(max);
//console.log(min);
//console.log(absNum);


// Oggetto DATE

let oggi = new Date();
oggi.getDay()
oggi.getDate();
oggi.getFullYear();
oggi.getMonth();
oggi.getTime();
oggi.getHours();
oggi.getMinutes();
oggi.getSeconds();
oggi.getMilliseconds();


oggi.setFullYear(1950);
oggi.setMonth(11);
oggi.setDate(25);
oggi.setTime(1285765413);
oggi.setHours(9);
oggi.setMinutes(30);
oggi.setSeconds(00);
oggi.setMilliseconds(00);

//console.log(oggi.getDay());
//console.log(oggi);
//console.log(oggi.getDate());

// Strutture di controllo
// costrutto if
//if(codizione) { blocco di istruzioni } else if(condizione){ blocco di istruzioni } else { blocco di istruzioni }
let eta = 19;
if(typeof(eta) !== 'number') { 
   //// console.log("Inserisci un valore numerico!!!")
} else if(eta < 18) {
   //// console.log("Hai meno di 18 anni!!")
} else if(eta === 18) {
   //// console.log("Hai 18 anni!!")
} else {
   //// console.log("Hai più di 18 anni!!")
}

// costrutto switch
/* switch (espressione) {
    case 1 value:
        blocco di istruzioni
        break;
    case 2 value:
        blocco di istruzioni
        break;
    default:
        blocco di istruzioni
        break;
} */
let mese = 45;
switch (mese) {
    case 1:
        console.log('Gennaio')
        break;
    case 2:
        console.log('Febbraio')
        break;
    case 3:
        console.log('Marzo')
        break;
    case 4:
        console.log('Aprile')
        break;
    default:
       // console.log('Non hai inserito un valore corretto')
        break;
}

// Struttura iterativa while
// while (condition) {  blocco di istruzioni }

let i = 0;
while(i > 0) {
    /* if(i % 2 === 0){
        i--;
        continue;
    } else if(i == 5) {
        break;
    } */
    console.log(i);
    i--;
}

// Struttura iterativa do while
// do {  blocco di istruzioni } while (condition)

let j = 0;
do {
    // console.log(j);
    j--;
} while(j > 0)

// Struttura iterativa for
// for(contatore; codizione; incremento) { blocco di istruzioni }

let myarr = [25, 9, 78, 41, 3, 99];
//console.log(myarr[1]);

for(let i=0; i<myarr.length; i++){
    //console.log(i, myarr[i]);
}

// for(key in array) { blocco di istruzioni }
for (const key in myarr) {
    //console.log(key, myarr[key]);
}

// for(element of array) { blocco di istruzioni }
for (const ele of myarr) {
    //console.log(ele);
}

// myarr.forEach((ele, index) => console.log(index,ele))

myarr.forEach((ele, index) => {
    const i = index;
    const e = ele;
    //console.log(i,e); 
});

for(let i = 0; i < 10; i++) {
    let riga = '';
    for(let j = 0; j < 10; j++) {
        riga += '*';
    }
    // console.log(riga);
}




