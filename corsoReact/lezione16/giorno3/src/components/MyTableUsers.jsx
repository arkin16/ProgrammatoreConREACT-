import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Info, Trash } from 'react-bootstrap-icons';

export default function MyTableUsers(props) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {props.users.map((ele,index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{ele.name}</td>
          <td>{ele.username}</td>
          <td>{ele.address.city}</td>
          <td className="text-center">
            <Button variant="outline-warning" size="sm" className='mx-1' onClick={() => props.selectUser(ele)}><Info size="20" /></Button>
            <Button variant="outline-danger" size="sm" className='mx-1' onClick={() => props.removeUser(ele)}><Trash size="20" /></Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}
