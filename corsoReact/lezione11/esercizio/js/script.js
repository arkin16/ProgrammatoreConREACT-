class Contatto {
    constructor(nome, cognome, citta, telefono, email) {
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
        this.telefono = telefono;
        this.email = email;
    }
}

let listaContatti = [];


function saveContact() {
    /* let dati = document.querySelectorAll('.container input');
    let nome = dati[0].value;
    let cognome = dati[1].value;
    let citta = dati[2].value;
    let telefono = dati[3].value;
    let email = dati[4].value; */

    let nome = document.querySelector('input[name="firstname"]').value;
    let cognome = document.querySelector('input[name="lastname"]').value;
    let citta = document.querySelector('input[name="city"]').value;
    let telefono = document.querySelector('input[name="phone"]').value;
    let email = document.querySelector('input[name="email"]').value;
    
    let obj = new Contatto(nome, cognome, citta, telefono, email);
    
    listaContatti.push(obj);
    resetField();
    viewContactList();
}

function resetField() {
    document.querySelector('input[name="firstname"]').value = ''
    document.querySelector('input[name="lastname"]').value = ''
    document.querySelector('input[name="city"]').value = ''
    document.querySelector('input[name="phone"]').value = ''
    document.querySelector('input[name="email"]').value = ''
}

function viewContactList() {
    // for (let i = 0; i < listaContatti.length; i++) { console.log(listaContatti[i]) }
    // for (const key in listaContatti) { console.log(listaContatti[key]) }
    // for (const contatto of listaContatti) { console.log(contatto) }

    let lista = document.querySelector('div ul.list-group');
    lista.innerHTML = '';

    listaContatti.forEach((c, i) => {
        
        // <li class="list-group-item">An item</li>
        let riga = document.createElement('li');
        riga.className = 'list-group-item';
        riga.innerHTML = i+1 + ' - ' + c.nome + ' ' + c.cognome + '(' + c.citta + ')  Tel. ' + c.telefono + ' Email: ' + c.email + ' <button type="button" class="btn btn-outline-danger" onclick="removeContact('+i+')">X</button>'

        lista.appendChild(riga)
    });


    /* for (const i in listaContatti) { 
         // <li class="list-group-item">An item</li>
         let c = listaContatti[i];
        let riga = document.createElement('li');
        riga.className = 'list-group-item';
        riga.innerHTML = i+1 + ' - ' + c.nome + ' ' + c.cognome + '(' + c.citta + ')  Tel. ' + c.telefono + ' Email: ' + c.email + ' <button type="button" class="btn btn-outline-danger" onclick="removeContact('+i+')">X</button>'

        lista.appendChild(riga)
    } */

    /* for (let i = 0; i < listaContatti.length; i++) { 
        let c = listaContatti[i];
        let riga = document.createElement('li');
        riga.className = 'list-group-item';
        riga.innerHTML = i+1 + ' - ' + c.nome + ' ' + c.cognome + '(' + c.citta + ')  Tel. ' + c.telefono + ' Email: ' + c.email + ' <button type="button" class="btn btn-outline-danger" onclick="removeContact('+i+')">X</button>'

        lista.appendChild(riga)
    } */

    /* for (const c of listaContatti) { 
        
        let i = listaContatti.indexOf(c);
        
        let riga = document.createElement('li');
        riga.className = 'list-group-item';
        riga.innerHTML = i+1 + ' - ' + c.nome + ' ' + c.cognome + '(' + c.citta + ')  Tel. ' + c.telefono + ' Email: ' + c.email + ' <button type="button" class="btn btn-outline-danger" onclick="removeContact('+i+')">X</button>'

        lista.appendChild(riga)
    } */
    
}

function removeContact(index) {
    listaContatti.splice(index, 1);
    viewContactList();
}

