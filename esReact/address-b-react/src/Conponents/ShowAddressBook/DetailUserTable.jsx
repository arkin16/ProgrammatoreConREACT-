
import React from "react";
import {Table, Button} from 'react-bootstrap/';
import { XCircle, EmojiSmileUpsideDownFill} from "react-bootstrap-icons";

export default function DetailUserTable(props) {
  return (
    <Table  striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th></th>
            <th>{props.detailsU.name}</th>
            <th>City and Street</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Name Company</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td className="text-center mt-4 mb-4"><EmojiSmileUpsideDownFill size={28}/></td>
            <td>{props.detailsU.address.city}, {props.detailsU.address.street}</td>  
            <td>{props.detailsU.address.zipcode}</td>
            <td>{props.detailsU.phone}</td>
            <td>{props.detailsU.website}</td>
            <td>{props.detailsU.company.name}</td>
            <td><Button variant="outline-light" onClick={()=> props.closeDetails(null)}><XCircle/></Button></td>
          </tr>
          </tbody>
    </Table>    
  )
}
