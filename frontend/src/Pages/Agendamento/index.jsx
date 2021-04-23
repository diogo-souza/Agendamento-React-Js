/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Container, Card, Row, Button, Col,
} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Formik, Form, Field,
} from 'formik';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select';
import DatePicker from '../../Components/DatePicker';
// importando as funções de valores iniciais, validação e submit dos valores
import { initialValues, validationSchema, onSubmitFunc } from '../../Components/Formik/funcs';

export default function index() {
  const options = [
    { categoria: 'idoso', label: 'Idoso' },
    { categoria: 'adulto', label: 'Adulto' },
    { categoria: 'criança', label: 'Criança' },
  ];

  // Corpo da aplicação com formulário Formik
  return (
    <Container>
      <Card className="m-4">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitFunc}
          validationSchema={validationSchema}
        >
          <Form>
            <label
              className="m-2"
            >
              Nome

            </label>
            <Field
              className="form-control"
              type="text"
              id="nome"
              name="nome"
            />
            <label
              className="m-2"
            >
              Categoria

            </label>
            <Select
              className="input"
              options={options}
              id="categoria"
              name="categoria"
            />
            <Row className="m-2">
              <label
                className="m-2"
              >
                Data de nascimento

              </label>
              <DatePicker
                className="form-control"
                id="dataNascimento"
                name="dataNascimento"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
              <label
                className="m-2"
              >
                Data de Vacina

              </label>
              <DatePicker
                className="form-control"
                id="dataVacina"
                name="dataVacina"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </Row>
            <Row className="m-2">
              <Col xl={12} md={9}>
                <Button
                  type="submit"
                >
                  Agendar

                </Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </Card>
      <ToastContainer />
    </Container>
  );
}
