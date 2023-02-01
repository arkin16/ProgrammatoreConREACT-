import axios from "axios";
import React from "react";

export default function Signup() {
  const register = () => {
    let obj = {
      email: "mrossi@mail.com",
      password: "bestPassw0rd",
      firstname: "Mario",
      lastname: "Rossi",
      city: "San Francisco",
      age: 49
    };
    axios.post('http://localhost:3000/signup', obj)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    };

  return (
    <div>
      signup:{" "}
      <button type="button" onClick={register}>
        Register
      </button>
    </div>
  );
}
