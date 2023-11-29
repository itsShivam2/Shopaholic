import "./App.css";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import MyState from "./Context/Data/MyState";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import ProductItemPage from "./Pages/ProductItemPage";
import AddProduct from "./Pages/Admin/AddProduct";
import UpdateProduct from "./Pages/Admin/UpdateProduct";
import Error from "./Pages/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productsList, setProductsList] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setProductsList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <MyState>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home productsList={productsList} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoutesForAdmin>
                <Admin />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/productItem/:id" element={<ProductItemPage />} />
          <Route path="/error" element={<Error/>}/>
        </Routes>
        <ToastContainer />
        {/* <Footer/> */}
      </div>
    </MyState>
  );
}

export default App;

// Protected Route for Admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "shivam@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

// Protected Route for User
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
