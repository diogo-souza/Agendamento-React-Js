import React, { useState, useEffect } from 'react';
import {
  Container, Form, Card, Button,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../utils/api';

export default function index() {
  const [form, setForm] = useState({
    nome: '',
    select: '',
  });

  const fetchDados = async () => {
    const response = await axios.get('/agenda');
    setForm(response.data);
  };

  useEffect(() => {
    fetchDados();
  }, []);

  const [dataDeVacina, setDateDeVacina] = useState(new Date());

  const [dataDeNascimento, setDateDeNascimento] = useState(new Date());

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const addAgendamento = async (event) => {
    event.preventDefault();

    const data = {
      completed: false,
      nome: form.nome,
      select: form.select,
      dataVacina: dataDeVacina,
      dataNascimento: dataDeNascimento,
    };

    await axios.post('/agenda', data);
  };

  return (
    <Container>
      <Card>
        <Form onSubmit={addAgendamento}>
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
                selected={dataDeNascimento}
                onChange={(date) => setDateDeNascimento(date)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data Vacinação</Form.Label>
              <DatePicker
                selected={dataDeVacina}
                onChange={(date) => setDateDeVacina(date)}
              />
            </Form.Group>
          </Form.Group>
          <Button
            type="submit"
          >
            Agendar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
