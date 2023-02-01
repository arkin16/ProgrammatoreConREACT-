import React, { useEffect, useRef, useState } from 'react'

export default function FunctionalComponent() {
   
  let [test, setTest] = useState('')
  let [name, setName] = useState('')

  const inputName = useRef(null);
  const inputUsername = useRef(null);

  useEffect(() => {
    console.log('useEffect');
    return () => {
        console.log('useEffect destroy');
    }
  }, [])

  const handleChangeName = () => {
    let obj = { name: inputName.current.value, username: inputUsername.current.value}
    console.log(obj);
  }

  return (
    <>
        <div>FunctionalComponent</div>
        <h2>State: {test}</h2>
        <h2>State: {name}</h2>
        <input type="text" placeholder="Name..." ref={inputName} />
        <input type="text" placeholder="Username..." ref={inputUsername} />
        <button onClick={handleChangeName}>Set Input name</button>
        <button onClick={() => setTest('Function Test')}>Change State</button>
        <button onClick={() => setName('Mario')}>Change name</button>
    </>
  )
}




