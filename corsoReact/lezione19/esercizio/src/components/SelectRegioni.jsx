import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function SelectRegioni({regioni, selectRegione}) {
  return (
    <Row>
        <Col>
            <Form.Select aria-label="Default select example" onChange={selectRegione}>
                <option value={''}>Seleziona Regione</option>
                {regioni.map(r => <option key={r} value={r}>{r}</option>)}
            </Form.Select>
        </Col>
    </Row>
  )
}
