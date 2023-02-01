import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { TrashFill, EyeFill } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllContacts, removeContact } from '../actions'

const mapStateToProps = (state) => {
  return { contacts: state.contacts} 
}

function TableContacts({contacts, removeContact, getAllContacts}) {

  const navigate = useNavigate();

  useEffect(() => {
    getAllContacts();
  }, [])
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(c => (
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.fullname}</td>
          <td>{c.city}</td>
          <td className="text-center">
            <Button variant="outline-danger" className="mx-1 btn-sm" onClick={()=> removeContact(c.id)}><TrashFill /></Button>
            <Button variant="outline-warning" className="mx-1 btn-sm" onClick={() => navigate('/contactlist/'+c.id+'/detail')}><EyeFill /></Button>
          </td>
        </tr>
      ))}
       
      </tbody>
    </Table>
  )
}


export default connect(mapStateToProps, { getAllContacts, removeContact })(TableContacts)