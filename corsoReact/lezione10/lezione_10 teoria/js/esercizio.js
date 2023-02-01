let oggi = new Date();
document.write('<h1>'+ oggi + '</h1>');

document.write('<p>Giorno: ' + oggi.getDate() + '</p>');
document.write('<p>Mese: ' + (oggi.getMonth() + 1) + '</p>');
document.write('<p>Anno: ' + oggi.getFullYear() + '</p>');

document.write('<h2>' + formatDate(oggi) + '</h2>');

function formatDate(data) {
    //return data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear() + ' - ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
    return `${data.getDate()} / ${data.getMonth()+1} / ${data.getFullYear()} - ${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}`;
}

document.write('<hr/ >');

/* let budget = +prompt('Inserisci budget');
let metaBudget = budget/2;
let quartoBudget = metaBudget/2;

while(true) {
    let spesa = +prompt('Inserisci spesa');
    if(spesa > budget) {
        alert('Non hai budget a disposizione!!!!');
    } else {
        budget -= spesa;
    }

    if(budget === 0) {
        break;
    } else if(budget <= quartoBudget) {
        alert('Il tuo budget sta terminando!!!!');
    } else if(budget <= metaBudget) {
        alert('Hai speso più di metà del tuo budget!!!')
    }


    document.write('<p> Budget disponibile: ' + budget + '</p>');
} */


document.write('<hr/ >');

let lung = +prompt('Inserisci la lungezza del triangolo');
const arr = [];

for (let i = 0; i < lung; i++) {

    let riga = '';

    for (let j = 0; j < lung+i; j++) {

        if(lung-j-1>i) 
            riga += ' ';
         else 
            riga += '*';
            
    }
    arr.push(riga);
    console.log(riga);
}

console.log(arr);
