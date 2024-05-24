import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function B2() {
  return (
    <div>
        <h1>B2</h1>
        <InputGroup size="lg">
        <Form.Control
          aria-label="Large" placeholder='Large'
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <br />
      <InputGroup className="mb-3">
    
        <Form.Control
          aria-label="Default" placeholder='Normal'
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small" placeholder='Small'
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  )
}
