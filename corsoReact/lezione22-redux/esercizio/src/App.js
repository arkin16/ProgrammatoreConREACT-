import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createStore } from 'redux';
import HeaderNav from './components/HeaderNav';
import ContactListPage from './pages/ContactListPage';
import { storeReducer } from './reducers';
import DetailContactPage from './pages/DetailContactPage';

const contacts = [{
  firstName: "Mario",
  lastName: "Rossi",
  city: "Roma",
  phone: "123456789",
  email: "m.rossi@example.com",
}]

const store = createStore(storeReducer, contacts)

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route index element={ <ContactListPage store={store} /> } />
        <Route path='contact/:id' element={ <DetailContactPage store={store} /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
