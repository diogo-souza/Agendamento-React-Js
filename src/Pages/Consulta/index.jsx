import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form } from 'react-bootstrap';
import Listar from '../../Components/Lista';

export default function index() {
  const columns = [
    {
      id: 'nome',
      value: 'Nome',
    },
    {
      id: 'data',
      value: 'Data',
    },
    {
      id: 'hora',
      value: 'Horário',
    },
  ];

  const [var1, setVar1] = useState();

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Pacientes do Dia</Form.Label>
          <Form.Control
            name="select"
            as="select"
            custom
            value={var1}
            onChange={(vari) => setVar1(vari)}
          >
            <option value="vazio">Vazio</option>
          </Form.Control>
        </Form.Group>
        <Listar
          columns={columns}
        />
      </Form>
    </Container>
  );
}
