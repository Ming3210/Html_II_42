import React from "react";
import { Alert } from "react-bootstrap";

export default function B5() {
  return (
    <div>
      <h1>B5</h1>

      <Alert variant="success">Tạo tk thành công</Alert>
      <Alert variant="danger"> Tạo tk thất bại</Alert>
      <Alert variant="warning">Tên ko đc để trống</Alert>
    </div>
  );
}
