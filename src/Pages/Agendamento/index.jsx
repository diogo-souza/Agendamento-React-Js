import React, { useState } from 'react';
import {
  Container, Form, Card, Button,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function index() {
  const [form, setForm] = useState({
    nome: '',
    select: '',
  });

  const [dataVacina, setDateVacina] = useState(new Date());

  const [dataNascimento, setDateNascimento] = useState(new Date());

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Container>
      <Card>
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              value={form.nome}
              onChange={onChange}
              placeholder="Digite seu nome"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              name="select"
              as="select"
              custom
              value={form.select}
              onChange={onChange}
            >
              <option value="idoso">Idoso</option>
              <option value="adulto">Adulto</option>
              <option value="jovem">Jovem</option>
              <option value="criança">Criança</option>
            </Form.Control>
            <Form.Group>
              <Form.Label>Data Nascimento</Form.Label>
              <DatePicker
                selected={dataNascimento}
                onChange={(date) => setDateNascimento(date)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Vacinação</Form.Label>
              <DatePicker
                selected={dataVacina}
                onChange={(date) => setDateVacina(date)}
              />
            </Form.Group>
          </Form.Group>
          <Button>
            Agendar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
