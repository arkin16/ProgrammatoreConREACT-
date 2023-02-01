import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const regexPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().matches(
    regexPassword,
    "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ).required("Required"),
});

export default function Signin() {

    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const loginUser = (obj) => {
      axios.post('http://localhost:3000/login', obj)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('userLogin', JSON.stringify(response.data));
                navigate('/users')
            })
            .catch(error => setError(error.response.data));
    }

  return (
    <>
      <Container style={{ width: "600px" }}>
        <h2 className="my-3 text-center display-3">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={(values) => { loginUser(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="email"
                type="email"
                className="form-control mb-3"
                placeholder="Email..."
              />
              {errors.email && touched.email ? (
                <Alert variant={"danger"}> {errors.email} </Alert>
              ) : null}
              <Field
                name="password"
                type="password"
                className="form-control mb-3"
                placeholder="Password..."
              />
              {errors.password && touched.password ? (
                <Alert variant={"danger"}> {errors.password} </Alert>
              ) : null}

              <button type="submit" className="form-control mb-3 btn btn-dark">
                Login
              </button>
            </Form>
          )}
        </Formik>
        { error && <Alert variant={"danger"}> {error} </Alert>}
      </Container>
    </>
  )
}
