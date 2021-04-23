import * as Yup from 'yup';
/* import { format, parseISO } from 'date-fns'; */
import { toast } from 'react-toastify';
import axios from '../../utils/api';

// Valores iniciais do formik
const initialValues = {
  nome: '',
  atendimento: '',
  categoria: '',
  dataVacina: null,
  dataNascimento: null,
};

// Validando campos do formulário
const validationSchema = Yup.object({
  dataVacina: Yup.date().required('Campo Obrigatório').nullable(),
  categoria: Yup.string().required('Campo Obrigatório'),
  nome: Yup.string().min(2, 'Mínimo 2 caracteres').max(64, 'Limite de caracteres excedido').required('Campo Obrigatório'),
  dataNascimento: Yup.date().required('Campo Obrigatório').nullable(),
});

// Manipulação dos dados para formatar
const onSubmitFunc = async (values) => {
  /* const date = JSON.parse(JSON.stringify(values));  */// Recebe em formato ISO8601
  /* const formatedBookday = format(parseISO(date.bookday), 'dd/MM/yyyy'); */
  /* const formatedDataNascimento = format(parseISO(date.formatedDataNascimento), 'dd/MM/yyyy'); */

  const newPaciente = {
    dataVacina: values.dataVacina,
    categoria: values.categoria,
    nome: values.nome,
    atendimento: 'Não Realizado',
    dataNascimento: values.dataNascimento,
  };

  try {
    await axios.post('/agenda', newPaciente);
    toast.success('Agendamento concluído!');
  } catch (e) {
    toast.error(e.message);
  }
};

export { validationSchema, initialValues, onSubmitFunc };
