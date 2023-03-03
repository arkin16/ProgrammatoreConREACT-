import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./style.css";

export default function InputGroupGenerics({label, example}) {    
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">{label[0]}</InputGroup.Text>
      <Form.Control placeholder={example[0]} />
      <InputGroup.Text id="inputGroup-sizing-default">{label[1]}</InputGroup.Text>
      <Form.Control placeholder={example[1]} />
    </InputGroup>
  );
}
