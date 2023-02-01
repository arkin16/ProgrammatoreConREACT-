import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ContactSchema = Yup.object().shape({
    fullname: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
  });

export default function UpdateContactForm({contact, updateContact}) {

    const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }} className="my-3">
      <Formik
        initialValues={{
          fullname: contact.fullname,
          city: contact.city,
          email: contact.email,
          phone: contact.phone,
        }}
        validationSchema={ContactSchema}
        onSubmit={(values) => {
          // same shape as initial values
          let obj = values;
          obj.id = contact.id;
          console.log(obj);
          updateContact(obj);
          navigate('/contactlist')
        }}
      >
        {({ errors, touched }) => (
          <Form>
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Enter Fullname"
                  className="form-control my-3"
                />
                {errors.fullname && touched.fullname ? (
                  <div>{errors.fullname}</div>
                ) : null}
              
                <Field
                  name="city"
                  type="text"
                  placeholder="Enter City"
                  className="form-control my-3"
                />
                {errors.city && touched.city ? <div>{errors.city}</div> : null}
              
                <Field
                  name="email"
                  type="email"
                  placeholder="Es. example@example.com"
                  className="form-control my-3"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              
                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter Phone"
                  className="form-control my-3"
                />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              
                <Button variant="dark" type="submit" className="form-control my-3">
                  Update Contact
                </Button>

          </Form>
        )}
      </Formik>
    </div>
  )
}
