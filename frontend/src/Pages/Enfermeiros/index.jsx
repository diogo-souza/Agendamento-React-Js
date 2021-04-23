/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Button,
} from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Listar from '../../Components/Lista';
import axios from '../../utils/api';

export default function Listaindex() {
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
      window.location.reload();
    } catch (e) {
      toast.error('Não foi possível finalizar o atendimento, por favor tente novamente mais tarde');
    }
  };

  // função para deletar paciente caso seja necessário
  const pacienteAtendidoDeletar = async (paciente) => {
    try {
      await axios.delete(`/agenda/${paciente.id}`);
      toast.sucess('Atendimento Removido!');
      window.location.reload();
    } catch (e) {
      toast.error('Não foi possível remover o usuário, por favor tente novamente mais tarde');
      window.location.reload();
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
      <ToastContainer />
    </Container>
  );
}
