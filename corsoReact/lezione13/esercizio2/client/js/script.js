// GET
fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(users => console.log(users));

// POST
/* let newObj = {
    name: "Giuseppe",
    lastname: "Verdi",
    city: "New York"
}
fetch("http://localhost:3000/users", {
                    method: "POST", 
                    body: JSON.stringify(newObj),
                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                })
            .then(response => response.json())
            .then(users => console.log(users)); */

// PUT
/* let editObj = {
    id: 1,
    name: "mariolino",
    lastname: "rossino",
    city: "Londra"
}
fetch("http://localhost:3000/users/1", {
                    method: "PUT", 
                    body: JSON.stringify(editObj),
                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                })
            .then(response => response.json())
            .then(users => console.log(users)); */

// PATCH
/* let editObj = {
    city: "Parigi"
}
fetch("http://localhost:3000/users/1", {
                    method: "PATCH", 
                    body: JSON.stringify(editObj),
                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                })
            .then(response => response.json())
            .then(users => console.log(users)); */

//DELETE
/* fetch("http://localhost:3000/users/1", { method: "DELETE" })
            .then(response => response.json())
            .then(users => console.log(users)); */
