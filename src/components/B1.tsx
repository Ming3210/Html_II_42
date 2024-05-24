import React from 'react'
import { Button } from 'react-bootstrap'

export default function B1() {
  return (
    <div>
        <h1>B1</h1>
        <Button variant="primary">Lưu</Button>{' '}
      <Button variant="secondary">Hủy</Button>{' '}
      <Button variant="success">Thành Công</Button>{' '}
      <Button variant="warning">Cảnh báo</Button>{' '}
      <Button variant="danger">Nguy hỉm</Button>{' '}
      <Button variant="info">Thông tin</Button>{' '}
      <Button variant="link">Đường dẫn</Button>
    </div>
  )
}
