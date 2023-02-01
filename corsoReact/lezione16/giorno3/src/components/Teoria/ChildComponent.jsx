import React from 'react'

export default function ChildComponent(props) {
  return (
    <>      
        <h1>ChildComponent: {props.mycount.count}</h1>
        <button onClick={props.myChange}>Click</button>
    </>
  )
}
