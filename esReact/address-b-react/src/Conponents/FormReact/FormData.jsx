import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const regexNameCompany =
  /^[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+(?:\s[a-zA-ZÃ§Ã‡Ä±ÄŸÄžÄ°Ã¶Ã–ÅŸÅžÃ¼Ãœ]+)+$/;
const regexUserName =
  /^(?=.{3,15}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
const regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const regexCity = /^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.#/]*$/gim;
const regexStreet = /^[a-zA-Z]+\s*\S+(?:\s+\S+){2}/g;
const regexZipCode = /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/;
const regexPhone = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
const regexWebsite =
  /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;

export default class FormData extends Component {
  state = {
    // fields: [
    //   "name",
    //   "username",
    //   "city",
    //   "street",
    //   "zipcode",
    //   "email",
    //   "phone",
    //   "website",
    //   "company",
    // ],
    // setShowButtonPost: true,
    // setShowButtonPatch: null,
    // setShowButtonPut: null,
  };

  SignupSchema() {
    return Yup.object().shape({
      name: Yup.string()
        .matches(
          regexNameCompany,
          "Fullname must be equal to Name space Lastname."
        )
        .required("Fullname is required."),
      username: Yup.string()
        .matches(
          regexUserName,
          "The username you selected Is not valid for one of the current reasons or more:- it must contain a Number of characters between 3-15 - it must NOT contain special characters on the first letter. FOR Example: example_123$"
        )
        .required("Username is required."),
      email: Yup.string()
        .matches(
          regexEmail,
          "Email is invalid. For example: example@example.com "
        )
        .required("Email is required"),
      city: Yup.string()
        .matches(regexCity, "City is invalid ")
        .required("City is required"),
      street: Yup.string().matches(regexStreet, "Steet is invalid"),
      zipcode: Yup.string().matches(regexZipCode, "Zipcode is invalid"),
      phone: Yup.string().matches(
        regexPhone,
        "Phone is invalid, Phone accept optional special characters and whitespace"
      ),
      website: Yup.string().matches(regexWebsite, "Website is invalid"),
      company: Yup.string().matches(regexNameCompany, "Company is invalid"),
    });
  }

  handleSubmit = (data) => {
    //this.props.transformInputForm(data);
    if (this.ButtonElement.name == "fullupdate") {
      console.log("fullupdate");
      this.props.transformInputForm(data, "fullupdate");
    }
    if (this.ButtonElement.name == "update") {
      console.log("update");
      this.props.transformInputForm(data, "update");
    }
    if (this.ButtonElement.name == "post") {
      console.log("post");
      this.props.transformInputForm(data, "post");
    }
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
                      (errors[`${field}`] && touched[`${field}`]
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name={`${field}`}
                    component="div"
                    className="invalid-feedback"
                  />
                </Col>
              ))}

              {this.props.setShowButtonPost && (
                <Col xs={4}>
                  <Button
                    className="btn btn-dark form-control"
                    name="post"
                    type="submit"
                    ref={(ButtonP) => (this.ButtonElement = ButtonP)}
                  >
                    Submit
                  </Button>
                </Col>
              )}
              {this.props.setShowButtonPatch && (
                <Col xs={4}>
                  <Button
                    ref={(Buttonb) => (this.ButtonElement = Buttonb)}
                    className="btn btn-warning form-control"
                    name="update"
                    type="submit"
                  >
                    Update
                  </Button>
                </Col>
              )}

              {this.props.setShowButtonPut && (
                <Col xs={4}>
                  <Button
                    ref={(ButtonU) => (this.ButtonElement = ButtonU)}
                    className="btn btn-danger form-control"
                    name="fullupdate"
                    type="submit"
                  >
                    Full Update
                  </Button>
                </Col>
              )}
            </Row>
          </Form>
        )}
      </Formik>
    );
  }
}