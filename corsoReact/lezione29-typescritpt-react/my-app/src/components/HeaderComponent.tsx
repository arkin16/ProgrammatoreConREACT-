import { ChangeEvent, useState } from 'react'

interface HeaderComponentProps {
    subtitle: string,
    txt: string
}

export default function HeaderComponent({subtitle, txt}: HeaderComponentProps) {

    const [name, setName] = useState<string>('Mario Rossi');

  const handleName = (e: ChangeEvent<HTMLInputElement>) =>{
    //console.log(e.target.value)
    setName(e.target.value)
  }

  return (
    <div>
        <h1>HeaderComponent</h1>
        <h2>{subtitle}</h2>
        <h3>{txt}</h3>
        <h4>My name is: {name}</h4>
        <input type="text" name="name" placeholder="Enter Name" onChange={handleName}></input>
        <button onClick={()=> setName('Giuseppe Verdi')}>Change Name</button>
    </div>
  )
}
