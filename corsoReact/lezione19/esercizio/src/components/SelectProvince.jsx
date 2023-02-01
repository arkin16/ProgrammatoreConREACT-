import React from 'react'
import { Form } from 'react-bootstrap'

export default function SelectProvince({province, selectProvincia}) {
  return (
    <Form.Select aria-label="Default select example" className="my-2" onChange={selectProvincia}>
      <option value={'-'}>Seleziona Provincia</option>
      {province.map(p => <option key={p.codice} value={p.nome}>{p.nome}</option>)}
    </Form.Select>
  )
}
