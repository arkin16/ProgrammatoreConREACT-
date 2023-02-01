import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { addTodo } from './todosSlice'
import { useDispatch } from 'react-redux';

const TodosSchema = Yup.object().shape({
    txt: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

export default function AddTodoForm() {

  const dispatch = useDispatch();
  
  return (
    <Formik
       initialValues={{
        txt: '',
       }}
       validationSchema={TodosSchema}
       onSubmit={(values, {resetForm}) => {
         // same shape as initial values
         const data = new Date();
         let obj = {
            txt: values.txt,
            completed: "",
            data: data.getDate() + '/' + data.getMonth()+1 + '/' + data.getFullYear()
          };
         console.log(obj);
         dispatch(addTodo(obj));
          resetForm();
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <Row className='p-3'>
                <Col xs={10}>
                    <Field name="txt" className="form-control" placeholder="Enter Todo..." /> 
                </Col>
                <Col>
                <Button variant='dark' type="submit" className="form-control">Add Todo</Button>
                </Col>
                <span className="my-2">
                {errors.txt && touched.txt ? (
                        <Alert variant={'danger'}>{errors.txt}</Alert>
                    ) : null}
                    </span>
            </Row>
         </Form>
       )}
     </Formik>
  )
}
