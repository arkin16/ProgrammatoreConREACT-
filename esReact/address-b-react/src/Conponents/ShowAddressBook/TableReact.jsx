import React, { Component } from "react";
import { Table, Button, Stack } from "react-bootstrap";
import { InfoLg, PencilFill, Trash3Fill } from "react-bootstrap-icons";


export default class TableReact extends Component {

  componentDidMount = () => {
    this.props.getUsers();
  };

  render() {
    console.clear();
    console.log(this.state);
    return (
      <Table striped bordered hover variant="dark" responsive="x1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.address.city}</td>
              <td>{u.email}</td>
              <td className="col-md-1">
                <Stack direction="horizontal" gap={3}>
                  <Button
                    variant="info"
                    onClick={() => this.props.detailsUser(u)}
                  >
                    <InfoLg size="18" />
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => this.props.createForm(u, "update") }
                  >
                    <PencilFill size="18" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => this.props.createForm(u)}
                  >
                    <PencilFill size="18" />
                  </Button>
                  <Button variant="danger" onClick={() => this.props.deleteUser(u)}>
                    <Trash3Fill size="18" />
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
