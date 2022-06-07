import React, { useEffect, useState } from "react";
import ServiceDetails from "../../ServiceDtetails/ServiceDetails";
import "./Services.css";
const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <h1 id="#services">SERVICES</h1>
      <div className="mainContent container">
        {service.map((picture) => (
          <ServiceDetails key={picture.id} picture={picture}></ServiceDetails>
        ))}
      </div>
    </>
  );
};

export default Services;
