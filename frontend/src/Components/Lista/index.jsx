import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

import axios from '../../utils/api';
import Table from '../Table';

/* componentização da lista nas páginas recuperando alguns valores de linhas e colunas */

export default function index({
  columns, endpoint,
}) {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(endpoint);
    setRows(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Card>
        <Table columns={columns} rows={rows} />

      </Card>
    </Container>
  );
}
