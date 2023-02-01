import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { login } from '../actions'
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginComponent({login}) {
  const navigate = useNavigate();
  return (
    <div style={{width: "600px", textAlign: "center", margin: "auto"}}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          //console.log(values);
          login(values);
          navigate('/')
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
            <Button variant="dark" type="submit" className="form-control my-3">Login</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(null, {login})(LoginComponent)