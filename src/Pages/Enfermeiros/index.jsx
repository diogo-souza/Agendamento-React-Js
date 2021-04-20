/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Form, Table, Card, Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

export default function Listaindex() {
  // chamando estado para setar as linhas da tabela
  const [rows, setRows] = useState([]);

  // fazendo requisição dos dados da tabela para listar
  const fetchRows = async () => {
    try {
      const response = await axios.get('/agenda');
      setRows(response.data);
      toast.info('Requisição feita com sucesso');
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    fetchRows();
  }, []);

  // tentativa de atualizar o ID da realização da Vacina
  const onSubmit = async () => {
    try {
      await axios.put(`/agenda/${rows.id}`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  // renderizando colunas da tabela de acordo com valores base
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

  // corpo da aplicação
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
