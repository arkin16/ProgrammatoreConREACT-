import React from 'react'

export default function AltroComponent(props) {
  return (
    <>      
        <h1>AltroComponent: {props.mycount.count}</h1>
        <button onClick={props.myChange}>Click</button>
    </>
  )
}
