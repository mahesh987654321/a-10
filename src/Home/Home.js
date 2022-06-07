import React from "react";

import Carocel from "../component/Carocel/Carocel";
import Services from "../component/Services/Services";

import Navbarr from "../Navbarr/Navbarr";

const Home = () => {
  return (
    <>
      <Navbarr></Navbarr>
      <Carocel></Carocel>
      <Services></Services>
    </>
  );
};

export default Home;
