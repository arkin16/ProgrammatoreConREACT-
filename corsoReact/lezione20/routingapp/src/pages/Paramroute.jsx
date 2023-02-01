import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Paramroute() {

let {id} = useParams();

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(response => response.json())
    .then(json => console.log(json))
}, [])


  return (
    <div>Paramroute {id}</div>
  )
}
