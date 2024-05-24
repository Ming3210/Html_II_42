import React, { useState } from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";

export default function B7() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
      <Row style={{ margin: 0 }}>
        <h1>B7</h1>
        <Col md={6}>
          <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              {/* <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              /> */}
              <strong className="me-auto">Cảnh báo</strong>
            </Toast.Header>
            <Toast.Body>Lỗi kết nối máy chủ</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
