import axios from 'axios';
import React from 'react'

export default function Signin() {

    const login = () => {
        let obj = {
          email: "mrossi@mail.com",
          password: "bestPassw0rd",
        };
        axios.post('http://localhost:3000/login/', obj)
            .then(response => console.log(response))
            .catch(err => console.log(err))
      };

  return (
    <div>
    Signin:{" "}
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}
