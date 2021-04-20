/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Form, Table, Card, Button,
} from 'react-bootstrap';
import axios from '../../utils/api';

export default function Listaindex() {
  const [rows, setRows] = useState([]);

  const fetchRows = async () => {
    const response = await axios.get('/agenda');
    setRows(response.data);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const onSubmit = async () => {
    await axios.get('/agenda');
  };

  const columns = [
    {
      id: 'nome',
      value: 'Nome',
    },
    {
      id: 'dataNascimento',
      value: 'Data',
    },
    {
      id: 'dataVacina',
      value: 'Horário',
    },
    {
      id: 'completed',
      value: 'Atendimento',
      render: () => (
        <Form>
          <Form.Group>
            <Form.Control
              name="select"
              as="select"
              custom
            >
              <option value="Não Realizado">Não Realizado</option>
              <option value="Realizado">Realizado</option>
            </Form.Control>
          </Form.Group>
        </Form>
      ),
    },
  ];

  return (
    <Container>
      <Card className="m-2">
        <Table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.id}>{column.value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.id}>
                    {
                column.render ? column.render(row[column.id], row) : row[column.id]
              }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          onClick={onSubmit}
          className="m-2"
        >
          Atualizar
        </Button>
      </Card>
    </Container>

  );
}
