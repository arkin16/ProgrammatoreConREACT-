import React from 'react'
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap'
import { TrashFill, EyeFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom';

export default function TableContatcs({store}) {

  //console.log(store.getState());
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);

  store.subscribe(() => {
    console.log('store.subscribe');
    setContacts([...store.getState()])
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {store.getState().map((c, i) => (
          <tr key={i}>
            <td>{i+1}</td>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.city}</td>
            <td className='text-center'>
            <Button 
              variant="warning" 
              className='btn-sm mx-1'
              onClick={() => navigate('/contact/'+i)}
              >
              <EyeFill />
            </Button>
            <Button 
              variant="danger" 
              className='btn-sm mx-1'
              onClick={() => store.dispatch({ type: 'REMOVE_CONTACT', index: i})}
              >
                <TrashFill />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
