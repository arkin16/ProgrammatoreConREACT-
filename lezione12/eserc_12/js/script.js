let url = 'https://jsonplaceholder.typicode.com/users/';
let prom = fetch(url).then(get => get.json());
let usersA = [];

document.addEventListener('DOMContentLoaded', () => {
    prom.then(users => {
        // console.log(users, users[0].name, users[0].username, users[0].email );
    });
});

function viewContactList() {
    // for (let i = 0; i < listaContatti.length; i++) { console.log(listaContatti[i]) }
    // for (const key in listaContatti) { console.log(listaContatti[key]) }
    // for (const contatto of listaContatti) { console.log(contatto) }

    let lista = document.getElementsByClassName("list-group");

    document.addEventListener('DOMContentLoaded', () => {
        prom.then(users => {
            users.forEach((c, i) => {
                console.log("users " + users[i].name)
               
                let riga = document.createElement('li');
                riga.className = 'list-group-item';
                riga.innerHTML = "users " /* + users[i].name */ + ' <a class="btn btn-primary btn-sm collapsed" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Info</a>';


                // console.log("riga "+riga)
                lista.appendChild(riga);
            })
        });
    });

}
viewContactList()