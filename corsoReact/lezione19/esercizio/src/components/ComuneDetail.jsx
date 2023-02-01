import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function ComuneDetail({comune, meteoComune}) {

  let gradi = (meteoComune.main.temp - 32) * 5/9;

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title className="my-2">Dettaglio Comune</Card.Title>
            <Card.Subtitle className="my-2 text-muted">{comune.nome} ({comune.provincia.nome})</Card.Subtitle>
            <Card.Subtitle className="my-2 text-muted">Regione: ({comune.provincia.regione})</Card.Subtitle>
            <Card.Text>Email: {comune.email}</Card.Text>
            <Card.Text>Telefono: {comune.telefono}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
            <Card.Body>
              <Card.Title className="my-2">Meteo Comune</Card.Title>
              <Card.Img src={'http://openweathermap.org/img/wn/'+meteoComune.weather[0].icon+'@2x.png'}></Card.Img>
              <Card.Text>Temperatura: {gradi}</Card.Text>
              <Card.Text>Vento: {meteoComune.wind.speed}</Card.Text>
            </Card.Body>
          </Card>
      </Col>
    </Row>
    
  )
}
