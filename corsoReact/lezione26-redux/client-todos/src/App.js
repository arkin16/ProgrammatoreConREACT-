import React from 'react';
import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import TodosPage from './pages/todosPage';
import LoginPage from './pages/loginPage';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector(state => state.userLogin.isLoggedIn)

  return (
    <BrowserRouter>
      <Link to='/todos'>Todos</Link>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/todos' element={isLoggedIn ? <TodosPage /> : <Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
