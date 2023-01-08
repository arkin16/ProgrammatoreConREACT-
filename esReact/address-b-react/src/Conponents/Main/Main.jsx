import React, { Component } from "react";
import FormData from "../FormReact/FormData";
import DetailUserTable from "../ShowAddressBook/DetailUserTable";
import TableReact from "../ShowAddressBook/TableReact";
import axios from "axios";

let localHost = "http://localhost:3000/users/";

class AddressBook {
  constructor(obj) {
    this.name = obj.name;
    this.username = obj.username;
    this.address = { city: obj.city, street: obj.street, zipcode: obj.zipcode };
    this.email = obj.email;
    this.phone = obj.phone;
    this.website = obj.website;
    this.company = { name: obj.company };
  }
}

export default class Main extends Component {
  state = {
    users: [],
    fields: [
      "name",
      "username",
      "city",
      "street",
      "zipcode",
      "email",
      "phone",
      "website",
      "company",
    ],
    setDetailsU: null,
    setShowForm: null,
  };

  getUsers = () => {
    axios.get(localHost).then((respose) => {
      this.setState({
        users: respose.data,
      });
    });
  };

  postUsers = (obj) => {
    axios
      .post(localHost, obj)
      .then((res) => this.getUsers())
      .catch((error) => console.log(error));
  };

  deleteUser = (u) => {
    axios.delete(localHost + u.id).then((respose) => this.getUsers());
  };

  details = (u) => {
    this.setState({
      setDetailsU: u,
    });
  };

  closeDetailsUser = (close) => {
    this.setState({
      setDetailsU: close,
    });
  };

  createForm = () => {
    this.setState({ setShowForm: true });
  };

  transformData = (data) => {
    let inputForm = new AddressBook(data);
    this.postUsers(inputForm);
  };

  render() {
    console.log(this.state.setDetailsU);
    return (
      <>
        <FormData
          field={this.state.fields}
          transformInputForm={this.transformData}
        />
        <TableReact
          getUsers={this.getUsers}
          users={this.state.users}
          deleteUser={this.deleteUser}
          detailsUser={this.details}
          createFormPatch={this.createForm}
        />
        {this.state.setDetailsU && (
          <DetailUserTable
            detailsU={this.state.setDetailsU}
            closeDetails={this.closeDetailsUser}
          />
        )}
      </>
    );
  }
}
