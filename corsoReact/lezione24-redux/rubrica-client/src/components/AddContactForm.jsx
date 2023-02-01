import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { addContact } from '../actions'

const ContactSchema = Yup.object().shape({
  fullname: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
});

function AddContactForm({addContact}) {
  return (
    <div style={{ textAlign: "center" }} className="my-3">
      <h1 className="my-3">Contact List</h1>
      <Formik
        initialValues={{
          fullname: "",
          city: "",
          email: "",
          phone: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          console.log(values);
          addContact(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              <Col>
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Enter Fullname"
                  className="form-control"
                />
                {errors.fullname && touched.fullname ? (
                  <div>{errors.fullname}</div>
                ) : null}
              </Col>
              <Col>
                <Field
                  name="city"
                  type="text"
                  placeholder="Enter City"
                  className="form-control"
                />
                {errors.city && touched.city ? <div>{errors.city}</div> : null}
              </Col>
              <Col>
                <Field
                  name="email"
                  type="email"
                  placeholder="Es. example@example.com"
                  className="form-control"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Col>
              <Col>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter Phone"
                  className="form-control"
                />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </Col>
              <Col>
                <Button variant="dark" type="submit" className="form-control">
                  Add Contact
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(null, {addContact})(AddContactForm);