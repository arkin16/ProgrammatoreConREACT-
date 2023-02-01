import React, { useEffect } from 'react'
import axios from 'axios'

export default function Userstable() {

useEffect(() => {
  axios.get('http://localhost:3000/users').then(response => console.log(response.data))
}, [])


  return (
    <div>Userstable</div>
  )
}
