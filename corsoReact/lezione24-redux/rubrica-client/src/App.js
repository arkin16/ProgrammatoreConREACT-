import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactListPage from './pages/ContactListPage';
import DetailContactPage from './pages/DetailContactPage';
import HeaderNav from './components/HeaderNav';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Container className="my-3">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/contactlist'} element={<ContactListPage />} />
          <Route path={'/contactlist/:id/detail'} element={<DetailContactPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
