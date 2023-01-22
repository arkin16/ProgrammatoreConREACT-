import React from "react";

import { Container, Alert, Button } from "react-bootstrap";
import { Field, Form, Formik } from "formik";
import { SigninSchema } from "./functionSignin";
import { useNavigate } from "react-router-dom";
import { useDispatch,  } from 'react-redux';
import { loginUser } from "../../../feature/sign_in-up/sign_in_upSlice";

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
/*   const loginUser = (obj) => {
    console.log(obj);
    axios.post("http://localhost:3000/login", obj).then((response) => {
      localStorage.setItem("userLogin", JSON.stringify(response.data));
      navigate("/users");
    });
  }; */
  return (
    <>
      <Container style={{ width: "600px" }}>
        <h2 className="my-3 text-center display-3">Login</h2>
        <Formik
          initialValues={{email:"", password:""}}
          validationSchema={SigninSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(loginUser(values));
            resetForm();
            navigate("/");
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

              <Button type="submit" className="form-control mb-3 btn btn-dark">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
