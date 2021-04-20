import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardUI from './cardUI';
import image1 from '../../Assets/atv1.jpg';
import image2 from '../../Assets/atv2.png';

const cardsAtividades = [
  {
    id: 1,
    title: 'Agendamento',
    image: image1,
    url: '/agendamento',
    descricao: 'Faça aqui a agendamento para ser Vacinado contra a COVID-19',
  },
  {
    id: 2,
    title: 'Enfermeiros',
    image: image2,
    url: '/enfermeiros',
    descricao: 'Área para enfermeiros',
  },
];

const CardSecond = () => (
  <Container>
    <Row>
      {cardsAtividades.map(({
        title, image, id, url, descricao,
      }) => (
        <Col md={4} key={id} className="mt-3">
          <CardUI imageSource={image} title={title} url={url} descricao={descricao} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardSecond;
