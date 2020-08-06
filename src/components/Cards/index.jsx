import React from "react";
import { Col } from "../Grid";
import "./style.css"

const index = (props) => {

  return (
    <Col size= "mb-4">
      <figure className="card">
        <img  src = {require(`../../assets/images/${props.image}`)} className="card-img-top" alt={`Link to ${props.name}`} />
        <h4 className="imageText card-text">
          <a href={props.href}>
            {props.name}
          </a>
        </h4>
      </figure>
    </Col>
  );
};

export default index;
