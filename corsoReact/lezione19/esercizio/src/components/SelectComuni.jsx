import React from 'react'
import { Form } from 'react-bootstrap'

export default function SelectComuni({comuni, selectComune}) {
  return (
    <Form.Select aria-label="Default select example" className="my-2" onChange={selectComune}>
      <option value={'-'}>Seleziona Comune</option>
      {comuni.map((c, i) => <option key={i} value={c.codiceCatastale}>{c.nome}</option>)}
    </Form.Select>
  )
}
