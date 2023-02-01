import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
});

export default function AddContactForm({store}) {
  return (
      <Formik
        initialValues={{
        firstName: "",
        lastName: "",
        city: "",
        phone: "",
        email: "",
      }}
        validationSchema={AddContactFormSchema}
        onSubmit={(values, {resetForm}) => {
          // same shape as initial values
          //console.log(values);
          store.dispatch({type: 'ADD_CONTACT', contact: values})
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="my-3">
            <Row>
              <Col>
                <Field name="firstName" className="form-control" placeholder="First Name" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </Col>
              <Col>
                <Field name="lastName" className="form-control" placeholder="Last Name" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </Col>
              <Col>
                <Field name="city" className="form-control" placeholder="City" />
                {errors.city && touched.city ? (
                  <div>{errors.city}</div>
                ) : null}
              </Col>
              <Col>
                <Field name="phone" className="form-control" placeholder="Phone" />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </Col>
              <Col>
                <Field name="email" type="email" className="form-control" placeholder="Email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Col>
              <Col>
                <Button type="submit" className="form-control" variant="dark">Add Contact</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
  );
}
