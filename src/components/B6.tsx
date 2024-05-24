import React from "react";
import { Spinner } from "react-bootstrap";

export default function B6() {
  return (
    <div>
      <h1>B6</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner style={{ color: "red" }} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
    </div>
  );
}
