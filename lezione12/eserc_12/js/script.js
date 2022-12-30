
let url = "https://jsonplaceholder.typicode.com/users/";
let promise = fetch(url).then((get) => get.json());
let arrU = [];

const div = document.getElementById("cont");
const subTable = document.getElementById("subifo");

class Rubrica {
  constructor(name, username, email, phone, city, street) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.address = {
      street: street,
      city: city,
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  promise.then((resp) => {
    arrU = resp;
    print();
  });
});

function print() {
  div.innerHTML = pritListofUser(arrU);
}

function pritListofUser(arrU) {
  console.log(arrU);
  const users = arrU.map((user) => `    <tr>
                                            <td>${user.name}</td>
                                            <td>${user.username}</td>
                                            <td>${user.email}</td>
                                            <td>
                                                <button type="button" class="btn btn-primary btn" onclick="setIndex(${user.id})">Info</button>
                                            </td>
                                            <td>
                                                <button type="button" class="btn-close" aria-label="Close" onclick="removeUser(${user.id})"></button>
                                            </td>
                                        </tr>`
    )
    .join("");
  return `${users}`;
}

function setIndex(id) {
  subTable.innerHTML = printInfoE(id);
}

function printInfoE(id) {
  let objtmp = arrU.find((obj) => obj.id === id);

  const subtable = ` 
                         <tr>

                             <td>${objtmp.name}</td>
                             <td>${objtmp.address.city}</td>
                             <td>${objtmp.address.street}</td>
                             <td>${objtmp.phone}</td>

                         <tr>`;

  return `${subtable}`;
}

document.getElementById("save").addEventListener("click", saveContact);

function saveContact() {
  let name = document.getElementById("fullname").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let city = document.getElementById("city").value;
  let street = document.getElementById("street").value;

  const newUser = new Rubrica(name, username, email, phone, city, street);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((rest) => arrU.push(rest), print())
    .catch((error) => console.log(error));
}

function removeUser(id) {
  fetch(url + id, { method: "DELETE" })
    .then((res) => res.json())
    .then(() => {
      arrU = arrU.filter((user) => user.id !== id);
      print();
    })
    .catch((error) => console.log(error));
}