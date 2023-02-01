import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'react-bootstrap';

const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    city: Yup.string().length(3, 'Too Short').required('Required').trim('---'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().test(regex).required('Required')
  });

export const AddFormFormikYup = () => (
    <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         city: '',
         email: '',
         password: ''
       }}
       
       validationSchema={SignupSchema}
       
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       
       {({ errors, touched }) => (
         <Form>
         <Row className="my-3">
            <Col>
                <Field className="form-control" placeholder="firstName..." name="firstName" />
                {errors.firstName && touched.firstName ? ( <div>{errors.firstName}</div> ) : null}
            </Col>
            <Col>
                <Field className="form-control" name="lastName" />
                {errors.lastName && touched.lastName ? ( <div>{errors.lastName}</div> ) : null}
            </Col>
            <Col>
                <Field className="form-control" name="city" />
                {errors.city && touched.city ? ( <div>{errors.city}</div> ) : null}
            </Col>
            <Col>
                <Field className="form-control" name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </Col>
            <Col>
                <Field className="form-control" name="password" type="password" />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </Col>
           <Col>
                <button className="btn btn-dark form-control" type="submit">Submit</button>
           </Col>

           </Row>
         </Form>
       )}
     </Formik>
   </div>
)

