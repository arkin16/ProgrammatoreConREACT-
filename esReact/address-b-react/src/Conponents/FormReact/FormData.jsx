import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const regexNameCompany = /^[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+(?:\s[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+)+$/;
const regexUserName = /^(?=.{3,15}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const regexCity = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.#/]*$/gmi;
const regexStreet =/^[a-zA-Z]+\s*\S+(?:\s+\S+){2}/g;
const regexZipCode = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/;
const regexPhone = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const regexWebsite = /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;

console.log(regexWebsite[90]);
export default class FormData extends Component {
  SignupSchema() {
    return Yup.object().shape({
      name: Yup.string()
        .matches(regexNameCompany, "Fullname must be equal to Name space Lastname.")
        .required("Fullname is required."),
      username: Yup.string()
        .matches(regexUserName, "The username you selected Is not valid for one of the current reasons or more:- it must contain a Number of characters between 3-15 - it must NOT contain special characters on the first letter. FOR Example: example_123$")
        .required("Username is required."),
      email: Yup.string()
        .matches(regexEmail,"Email is invalid. For example: example@example.com " )
        .required("Email is required"),
      city: Yup.string()
        .matches(regexCity, "City is invalid ")
        .required("City is required"),
      street: Yup.string()
       .matches(regexStreet, "Steet is invalid"),
      zipcode: Yup.string()
       .matches(regexZipCode, "Zipcode is invalid"),
      phone: Yup.string()
       .matches(regexPhone, "Phone is invalid, Phone accept optional special characters and whitespace"),
      website: Yup.string()
       .matches(regexWebsite, "Website is invalid"),
      company: Yup.string()
       .matches(regexNameCompany, "Company is invalid"), 
    });
  }

  handleSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  render() {
    const initValues = {
      name: "",
      username: "",
      city: "",
      street: "",
      zipcode: "",
      email: "",
      phone: "",
      website: "",
      company: "",
    };
    return (
      <Formik
        initialValues={initValues}
        validationSchema={this.SignupSchema}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="my-3">
            <Row className="justify-content-md-center">

            {this.props.field.map((field, i) => (
             <Col className="my-2" xs={4} key={i}>
                <Field
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className={
                   "form-control" +
                   (errors[`${field}`] && touched[`${field}`] ? " is-invalid" : "")
                  }
                  />
                <ErrorMessage
                  name={`${field}`}
                  component="div"
                  className="invalid-feedback"
                  />
              </Col>
            ))}
            <Col xs={4}>
                 <Button className="btn btn-dark form-control" type="submit">Submit</Button>
            </Col>
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
}
