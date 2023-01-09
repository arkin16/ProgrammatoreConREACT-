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

    setShowButtonPost: true,
    setShowButtonPatch: null,
    setShowButtonPut: null,
    tmpObj: {},
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

  fullUpdateUser = (obj) => {
    axios
      .put(localHost + this.state.tmpObj.id, obj)
      .then((res) => this.getUsers())
      .catch((error) => console.log(error));
  };

  updateUser = (obj) => {
    axios
      .patch(localHost + this.state.tmpObj.id, obj)
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

  createForm = (obj, who) => {
    this.setState({ setShowForm: true });
    if (who === "update") {
      this.setState({
        tmpObj: obj,
        setShowButtonPatch: true,
        setShowButtonPut: false,
      });
    } else {
      this.setState({
        tmpObj: obj,
        setShowButtonPut: true,
        setShowButtonPatch: false,
      });
    }
  };

  transformData = (data, who) => {
    let inputForm = new AddressBook(data);
    if (who === "update") {
      this.updateUser(inputForm);
    }
    if (who === "fullupdate") {
      this.fullUpdateUser(inputForm);
    } 
    if(who == "post"){
    
      this.postUsers(inputForm);
    }
  };

  render() {
    console.log(
      "patch",
      this.state.setShowButtonPatch,
      "put",
      this.state.setShowButtonPut
    );
    return (
      <>
        <FormData
          field={this.state.fields}
          transformInputForm={this.transformData}
          setShowButtonPost={true}
          setShowButtonPatch={null}
          setShowButtonPut={null}
        />
        <TableReact
          getUsers={this.getUsers}
          users={this.state.users}
          deleteUser={this.deleteUser}
          detailsUser={this.details}
          createForm={this.createForm}
        />
        {this.state.setDetailsU && (
          <DetailUserTable
            detailsU={this.state.setDetailsU}
            closeDetails={this.closeDetailsUser}
          />
        )}
        {this.state.setShowForm && (
          <FormData
            field={this.state.fields}
            transformInputForm={this.transformData}
            setShowButtonPatch={this.state.setShowButtonPatch}
            setShowButtonPut={this.state.setShowButtonPut}
            

          />
        )}
      </>
    );
  }
}
