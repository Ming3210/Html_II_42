import React from "react";
import { Button, Card } from "react-bootstrap";

export default function B3() {
  return (
    <div>
      <h1>B3</h1>
      <div style={{ display: "flex" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://img.freepik.com/premium-vector/vector-bang-comic-text-speech-bubblepop-art-style-sound-effect-vintage-comic-book-poster-background_178863-383.jpg?size=626&ext=jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
