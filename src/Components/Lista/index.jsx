import React from 'react';
import { Container, Card } from 'react-bootstrap';
import TableRender from '../Table';

export default function index({ columns, rows }) {
  return (
    <Container>
      <Card>
        <TableRender
          columns={columns}
          row={rows}
        />
      </Card>
    </Container>
  );
}
