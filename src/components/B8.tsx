import React from "react";
import { Nav } from "react-bootstrap";

export default function B8() {
  return (
    <div>
      <h1>B8</h1>
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-3">Trang chủ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Giới thiệu</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Liên hệ</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
