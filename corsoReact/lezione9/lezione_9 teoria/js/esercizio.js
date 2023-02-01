let nome, cognome, citta, anno, eta, pensione, lavori;

function registrazione() {
    nome = prompt('Inserisci il tuo nome');
    cognome = prompt('Inserisci il tuo cognome');
    citta = prompt('Inserisci la tua citta');
    sesso = prompt('Inserisci sesso (M/F)');
    anno = prompt('Inserisci il tuo anno di nascita');
    let annoAttuale = 2022;
    eta = annoAttuale - anno;

    lavori = [];

    let lavoro1 = confirm('Inserisci il tuo primo lavoro');
    if(lavoro1 === true) {
        lavori[0] = prompt('Inserisci il tuo ruolo lavoro');
    }
    let lavoro2 = confirm('Inserisci il tuo secondo lavoro');
    if(lavoro2 === true) {
        let lavoro2 = prompt('Inserisci il tuo ruolo lavoro');
        lavori.push(lavoro2);
    }
}

function calcolaPensione() {
    let etaPensioneDonna = 67;
    let etaPensioneUomo = 70;

    function calcola(sesso, eta) {
        let pensione = (sesso === 'M') ? etaPensioneUomo - eta : etaPensioneDonna - eta;
        return pensione;
    }

    /* let pensione;
    if(sesso === 'M') {
        pensione = etaPensioneUomo - eta;
    } else {
        pensione = etaPensioneDonna - eta;
    } */

    return calcola
}

let stampa = () => {
    document.write('<h1>'+ nome + ' ' + cognome + '</h1>');
    document.write('<h2>Città: '+ citta + '</h2>');
    document.write('<h2>Anno di nascita: '+ anno + '</h2>');
    document.write('<h2>Anni alla pensione: '+ pensione + '</h2>');
    document.write('<h2>Lavori: '+ lavori[0] + ' | ' + lavori[1] + '</h2>');
    console.log(nome, cognome, citta, anno, pensione, lavori);
}

registrazione();
pensione = calcolaPensione()(sesso, eta);
stampa();
