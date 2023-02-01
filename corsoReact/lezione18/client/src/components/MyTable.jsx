import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { TrashFill, InfoSquare } from 'react-bootstrap-icons';

const MyTable = ({ userlist, deleteUser, detailUser }) => {
/*   let {userlist} = props;
  console.log(userlist) */
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {userlist.map((ele, index) => (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{ele.name}</td>
          <td>{ele.username}</td>
          <td>{ele.email}</td>
          <td className='text-center'>
            <Button variant="outline-warning" className='mx-1' onClick={() => detailUser(ele)}><InfoSquare size={16} /></Button>
            <Button variant="outline-danger" className='mx-1' onClick={() => deleteUser(ele)}><TrashFill size={16} /></Button>
          </td>
        </tr>
      ))}
        
      </tbody>
    </Table>
  )
}

export default MyTable