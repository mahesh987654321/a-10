import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./AddToCart/AddToCart";
import Carocel from "./component/Carocel/Carocel";
import Header from "./component/Header/Header";
import Regester from "./component/Regester/Regester";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";
import Login from "./Login/Login";


function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      {/* <Navbar></Navbar> */}
      <Home></Home>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Carocel></Carocel>}></Route>
        <Route path="/addtocart" element={<AddToCart></AddToCart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/regester" element={<Regester></Regester>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
