import React, { useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export default function Page1() {

  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect');
    if(true){
      navigate("/login");
    }
  }, [])
  
  return (
    <div>Page1</div>
  )
}
