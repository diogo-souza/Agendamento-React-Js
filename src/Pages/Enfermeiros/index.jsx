import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listar from '../../Components/Lista';

export default function index() {
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
        <input
          className="m-2"
          type="checkbox"
        />
      ),
    },
  ];

  return (
    <Listar
      columns={columns}
      endpoint="/agenda"
    />
  );
}
