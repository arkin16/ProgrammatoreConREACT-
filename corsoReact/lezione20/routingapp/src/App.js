import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Headercomponent from './components/Headercomponent';
import Login from './pages/Login';
import Paramroute from './pages/Paramroute';

function App() {
  return (
    <BrowserRouter>
    <Headercomponent />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="p1" element={<Page1 />} />
          <Route path="p2" element={<Page2 />} />
          <Route path="p3" element={<Page3 />} />
          <Route path="params/:id" element={<Paramroute />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </BrowserRouter> 
  );
}

export default App;
