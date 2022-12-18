
/* let url = 'https://jsonplaceholder.typicode.com/users/';
let users = [{
    name: "tizio",
    lastname: "filippo",
    age: 43,

}];






fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        users
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((get) => get.json())
    .then((json) => console.log(json));



fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        users: "Mario",
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((get) => get.json())
    .then((json) => console.log(json));



fetch(url + 3, {
    method: 'DELETE',
})
    .then((get) => get.json())
    .then((json) => console.log(json));










      */