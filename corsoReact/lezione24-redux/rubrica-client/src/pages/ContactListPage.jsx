import React, { useEffect } from 'react'
import AddContactForm from '../components/AddContactForm'
import TableContacts from '../components/TableContacts'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = (state) => {
  return { userLogin: state.userLogin} 
}

 function ContactListPage({userLogin}) {

  const navigate = useNavigate();

  useEffect(() => {
    if(!userLogin) {
      navigate('/login')
    }
  }, [])
  

  return (
    <>
    <AddContactForm  />
    <TableContacts  />
    </>
  )
}

export default connect(mapStateToProps)(ContactListPage)