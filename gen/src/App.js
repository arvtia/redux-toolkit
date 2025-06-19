import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { useDispatch } from "react-redux";
import { loadCart } from "./redux/cartActions";
import { useEffect } from "react";

function App() {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);


  return (
   
    <BrowserRouter>
        <Navbar />

        <Routes >
            <Route path="/" element ={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
