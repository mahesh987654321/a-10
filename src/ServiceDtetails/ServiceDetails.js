import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ServicDetails.css";
const ServiceDetails = ({ picture }) => {
  const { name, details, images } = picture;
  const navigate = useNavigate();
  const handelButton = () => {
    navigate("/addtocart");
  };
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>NAME: {name}</Card.Title>
          <Card.Text>DETAILS: {details}</Card.Text>
          <Button onClick={handelButton} variant="primary">
            ADD to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
