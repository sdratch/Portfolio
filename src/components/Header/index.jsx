import React from "react";
import { Row, Col } from "../Grid";

const index = ({ title }) => {
  return (
    <Row>
      <Col size="12">
        <h1 className="ml-3">{title}</h1>
        <hr />
      </Col>
    </Row>
  );
};

export default index;
