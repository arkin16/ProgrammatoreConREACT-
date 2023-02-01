import React from 'react'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeUser, addUser } from './usersSlice' 

export default function Users() {

    const users = useSelector(state => state.users.userlist)
    const dispatch = useDispatch();
    const inputName = useRef();
    const inputLastName = useRef();
    const inputCity = useRef();

    const createUser = () => {
        const obj = {
            name: inputName.current.value,
            lastName: inputLastName.current.value,
            city: inputCity.current.value
        }
        dispatch(addUser(obj))
    }

  return (
    <div>
        <h1>Users</h1>

        <input type="text" name="name" placeholder="Name..." ref={inputName} />
        <input type="text" name="lastName" placeholder="LastName..." ref={inputLastName} />
        <input type="text" name="city" placeholder="City..." ref={inputCity} />
        <button onClick={createUser}>Add</button>
        <ul>
            {users.map((u,i) => (
                <li key={i}>
                    {u.name} {u.lastName} ({u.city}) 
                    <button onClick={() => dispatch(removeUser(u))}>x</button>
                </li>
            ))} 
        </ul>
    </div>
  )
}
