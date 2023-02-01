import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers, removeUser, addUser } from './fetchUserSlice'

export default function FetchUsers() {

    const inputName = useRef();
    const inputLastName = useRef();
    const inputCity = useRef();

  // useSelector mi permette di accedere allo stato dello store
    const users = useSelector(state => state.fetchUsers.userlist)
    const loading = useSelector(state => state.fetchUsers.loading)
    const error = useSelector(state => state.fetchUsers.error)
    // useDispatch mi permette di effettuare un dispatch delle action al reducer
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllUsers())
    }, [])
    
    const createUser = () => {
      const obj = {
          name: inputName.current.value,
          lastName: inputLastName.current.value,
          city: inputCity.current.value
      }
      dispatch(addUser(obj))
      inputName.current.value = ""
  }

  return (
    <div>
        <h1>Fetch Users</h1>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <input type="text" name="name" placeholder="Name..." ref={inputName} />
        <input type="text" name="lastName" placeholder="LastName..." ref={inputLastName} />
        <input type="text" name="city" placeholder="City..." ref={inputCity} />
        <button onClick={createUser}>Add</button>
        <ul>
            {users.map((u,i) => (
                <li key={i}>
                    {u.name} {u.lastName} ({u.city}) 
                    <button onClick={() => dispatch(removeUser(u.id))}>x</button>
                </li>
            ))} 
        </ul>
    </div>
  )
}
