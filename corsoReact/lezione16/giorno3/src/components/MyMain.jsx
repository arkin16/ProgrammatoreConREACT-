import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyTableUsers from './MyTableUsers';
import MyCardDetail from './MyCardDetail';

export default function MyMain(props) {
  return (
    <Row className="my-3">
            <Col>
                <MyTableUsers 
                  users={props.userlist} 
                  removeUser={props.remove} 
                  selectUser={props.select}
                />
            </Col>
            {props.detail && 
            <Col>
                <MyCardDetail detailUser={props.detail} />
            </Col>
            }
    </Row>
  )
}
