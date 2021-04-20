import React from 'react';

import { Card, Container } from 'react-bootstrap';
import CardPrincipal from '../Components/Cards/cardCentral';

export default function LoginHome() {
  return (
    <Container>
      <Card className="m-2">
        <CardPrincipal />
      </Card>
    </Container>

  );
}
