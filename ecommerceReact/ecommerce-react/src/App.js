import { BrowserRouter, Route, Routes } from "react-router-dom";
import MNavbar from "./Components/Navbar/MNavbar";

import Admin from "./Components/Pages/ContPageAdUs/PageAdmin/Admin";
import AdminAddProduct from "./Components/Pages/ContPageAdUs/PageAdmin/AdminAddProduct";

import UsersRegistered from "./Components/Pages/ContPageAdUs/PageAdmin/UsersRegistered";
import PageUser from "./Components/Pages/ContPageAdUs/PageUser/PageUser";
import Products from "./Components/Pages/Products/Products";
import ShoppingCart from "./Components/Pages/ShoppingCart/ShoppingCart";
import Signin from "./Components/Pages/Signin/Signin";
import Signup from "./Components/Pages/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <MNavbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="add-product" element={<AdminAddProduct />} />
            <Route path="users-registered" element={<UsersRegistered/>} />
          </Route>
          <Route path="/user" element={<PageUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
