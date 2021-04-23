/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import Listar from '../../Components/Lista';
import axios from '../../utils/api';

export default function Listaindex() {
  // função para deletar paciente caso seja necessário
  const pacienteAtendidoDeletar = async (paciente) => {
    try {
      await axios.delete(`/agenda/${paciente.id}`);
      toast.info('Atendimento Feito!');
    } catch (e) {
      toast.error(e.message);
    }
  };
  // dskdks
  // recuperando dados do paciente e mudando status de atendimento
  const pacienteEditarAtendimento = async (paciente) => {
    const response = await axios.get(`/agenda/${paciente.id}`);

    try {
      await axios.put(`/agenda/${paciente.id}`, {
        dataVacina: response.data.dataVacina,
        categoria: response.data.categoria,
        nome: response.data.nome,
        atendimento: 'Realizado',
        dataNascimento: response.data.dataNascimento,
      });
      toast.success('Atendimento Finalizado!');
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
      id: 'atendimento',
      value: 'Atendimento',
    },
    {
      id: 'completed',
      value: 'Status',
      render: (_, paciente) => (
        <>
          <Button
            onClick={() => pacienteEditarAtendimento(paciente)}
          >
            Atualizar
          </Button>
          <Button
            onClick={() => pacienteAtendidoDeletar(paciente)}
            className="ml-2"
            variant="danger"
          >
            Remover
          </Button>
        </>
      ),
    },
  ];

  // corpo da aplicação
  return (
    <Container className="mt-2">
      <Listar
        columns={columns}
        endpoint="/agenda"
      />
    </Container>
  );
}
