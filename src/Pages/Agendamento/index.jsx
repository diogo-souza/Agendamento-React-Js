import React, { useState, useEffect } from 'react';
import {
  Container, Form, Card, Button,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import axios from '../../utils/api';

export default function index() {
  // declarando estado principal para ser submetido ao cadastro
  const [form, setForm] = useState({
    nome: '',
    select: '',
    atendimento: '',
  });

  // fazendo a requisição dos dados na API
  const fetchDados = async () => {
    try {
      const response = await axios.get('/agenda');
      setForm(response.data);
      toast.info('Requisição feita com sucesso');
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  // declarando data de vacina e de nascimento para cadastramento
  const [dataDeVacina, setDateDeVacina] = useState(new Date());

  const [dataDeNascimento, setDateDeNascimento] = useState(new Date());

  // Verificando a mudança dos dados no formulário controlado
  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // função para adicionar agendamento na API
  const addAgendamento = async (event) => {
    event.preventDefault();

    const data = {
      completed: false,
      nome: form.nome,
      select: form.select,
      dataVacina: dataDeVacina,
      dataNascimento: dataDeNascimento,
      atendimento: 'Não Realizado',
    };

    try {
      await axios.post('/agenda', data);
      toast.info('Agendamento feito com sucesso');
    } catch (e) {
      toast.error(e.message);
    }
  };

  // Corpo da aplicação com formulário
  return (
    <Container>
      <Card className="m-4">
        <Form onSubmit={addAgendamento}>
          <Form.Group className="m-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              value={form.nome}
              onChange={onChange}
              placeholder="Digite seu nome"
            />
          </Form.Group>
          <Form.Group className="m-2">
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
            <Form.Group className="m-2">
              <Form.Label>Data Nascimento</Form.Label>
              <DatePicker
                className="m-2"
                selected={dataDeNascimento}
                onChange={(date) => setDateDeNascimento(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Data Vacinação</Form.Label>
              <DatePicker
                className="m-2"
                selected={dataDeVacina}
                onChange={(date) => setDateDeVacina(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Form.Group>
          </Form.Group>
          <Button
            type="submit"
            className="m-4"
          >
            Agendar
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
