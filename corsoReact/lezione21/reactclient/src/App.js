
import './App.css';
import HeaderNav from './components/HeaderNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Userlist from './pages/Userlist';
import Logout from './components/Logout';
import Update from './pages/Update';
import Posts from './pages/Posts';

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/login" element={ <Signin /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/register" element={ <Signup /> } />
        <Route path="/update/:id" element={ <Update /> } />
        <Route path="/users" element={ <Userlist /> } />
        <Route path="/users/:id/posts" element={ <Posts /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
