import React from "react";

import { Container,  Alert, Button } from "react-bootstrap";
import { Field, Form, Formik } from "formik";

export default function FormProduct() {
  return (
    <>
      <Container style={{ width: "600px" }}>
        <h2 className="my-3 text-center display-3">Register</h2>
        <Formik
          initialValues={{
            name: "",
            description: "",
            image: [],
            price: "",
            quantityAvailable: 0,
            beenProduced: "",
          }}
          validationSchema={""}
          onSubmit={(values, { resetForm }) => {
            //registerUser(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="name"
                type="text"
                className="form-control mb-3"
                placeholder="Name Product"
              />
              {errors.name && touched.name ? (
                <Alert variant={"danger"}> {errors.name} </Alert>
              ) : null}
              <Field
                name="description"
                type="text"
                className="form-control mb-3"
                placeholder="Description Product"
              />
              {errors.description && touched.description ? (
                <Alert variant={"danger"}> {errors.description} </Alert>
              ) : null}
              <Field
                name="image"
                type="file"
                className="form-control form-control-sm"
                placeholder="Password"
              />
              {errors.image && touched.image ? (
                <Alert variant={"danger"}> {errors.image} </Alert>
              ) : null}

              <Field
                name="price"
                type="text"
                className="form-control mb-3"
                placeholder="Price"
              />
              {errors.price && touched.price ? (
                <Alert variant={"danger"}> {errors.price} </Alert>
              ) : null}

              <Field
                name="quantityAvailable"
                type="number"
                className="form-control mb-3"
                placeholder="Quantity Available"
              />
              {errors.quantityAvailable && touched.quantityAvailable ? (
                <Alert variant={"danger"}> {errors.quantityAvailable} </Alert>
              ) : null}

              <Button type="submit" className="form-control mb-3 btn btn-dark">
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
