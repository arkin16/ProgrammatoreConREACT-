import React, { useEffect, useState } from 'react'

export interface UserData {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    phone:    string;
    website:  string;
}

export default function FetchComponent() {

  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(error => console.error(error))
  }, [])
  

  return (
    <div>
        <h1>FetchComponent</h1>
        {users.map(ele => (
            <p key={ele.id}>{ele.name} -  {ele.email}</p>
        ))}
    </div>
  )
}
