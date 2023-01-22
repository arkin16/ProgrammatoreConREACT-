import React from "react";

import { Container, Alert, Button } from "react-bootstrap";
import { Field, Form, Formik } from "formik";
import { SingnupSchema } from "./functionSignup.js";
import { useNavigate } from "react-router-dom";
import { useDispatch,  } from 'react-redux'; //useSelector
import { registerUser } from "../../../feature/sign_in-up/sign_in_upSlice";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const registerUser = (obj) => {
  //   console.log(obj);
    /* axios.post("http://localhost:3000/register", obj).then(() => {
      navigate("/login");
    });}; */


  return (
    <>
      <Container style={{ width: "600px" }}>
        <h2 className="my-3 text-center display-3">Register</h2>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={SingnupSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(registerUser(values));
            resetForm();
            navigate("/login");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="fullname"
                type="text"
                className="form-control mb-3"
                placeholder="FullName"
              />
              {errors.fullname && touched.fullname ? (
                <Alert variant={"danger"}> {errors.fullname} </Alert>
              ) : null}
              <Field
                name="email"
                type="email"
                className="form-control mb-3"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Alert variant={"danger"}> {errors.email} </Alert>
              ) : null}
              <Field
                name="password"
                type="password"
                className="form-control mb-3"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <Alert variant={"danger"}> {errors.password} </Alert>
              ) : null}

              <Field
                name="confirmPassword"
                type="password"
                className="form-control mb-3"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Alert variant={"danger"}> {errors.confirmPassword} </Alert>
              ) : null}

              <Button type="submit" className="form-control mb-3 btn btn-dark">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
