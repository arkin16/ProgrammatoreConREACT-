import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { register } from "../actions"
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
  });

function RegisterComponent({register}) {

  const navigate = useNavigate();

  return (
    <div style={{width: "600px", textAlign: "center", margin: "auto"}}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          age: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          console.log(values);
          register(values);
          navigate('/login');
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="firstname"
              type="text"
              placeholder="Enter Firstname"
              className="form-control my-3"
            />
            {errors.firstname && touched.firstname ? <div>{errors.firstname}</div> : null}
            <Field
              name="lastname"
              type="text"
              placeholder="Enter Lastname"
              className="form-control my-3"
            />
            {errors.lastname && touched.lastname ? <div>{errors.lastname}</div> : null}
            <Field
              name="age"
              type="number"
              placeholder="Enter Age"
              className="form-control my-3"
            />
            {errors.age && touched.age ? <div>{errors.age}</div> : null}
            <Field
              name="email"
              type="email"
              placeholder="Es. example@example.com"
              className="form-control my-3"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              name="password"
              type="password"
              placeholder="Enter Password"
              className="form-control my-3"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Button variant="dark" type="submit" className="form-control my-3">Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default connect(null, {register})(RegisterComponent)