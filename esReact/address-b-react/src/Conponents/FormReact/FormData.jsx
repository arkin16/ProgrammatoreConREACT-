import React, { Component } from "react";
// import { Row, Col, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class FormData extends Component {
  // state = {};

  // componentDidMount = () => {
  //   this.props.field.forEach((propety) => {
  //     this.setState({
  //       [propety]: "",
  //     });
  //   });
  // };

  SignupSchema() {
    return Yup.object().shape({
      name: Yup.string()
        .required("Fullname is required")
        .max(6, "Username must be at least 6 characters"),
      username: Yup.string()
        .required("Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
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
          <Form>
            {this.props.field.map((field, i) => (
              <div key={i}>
                <Field
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className={
                    "form-control" +
                    (errors.name && touched.name ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            ))}
          </Form>
        )}
      </Formik>
    );
  }
}
