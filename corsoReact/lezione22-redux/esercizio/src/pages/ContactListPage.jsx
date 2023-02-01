import React from 'react'
import { Container } from 'react-bootstrap'
import AddContactForm from '../components/AddContactForm'
import TableContatcs from '../components/TableContatcs'

export default function ContactListPage({store}) {
  //console.log(store.getState());
  return (
    <>
        <Container>
            <AddContactForm store={store} />
            <TableContatcs store={store} />
        </Container>
    </>
  )
}
