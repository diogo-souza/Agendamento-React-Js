import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Agendamento from './Pages/Agendamento';
import Consulta from './Pages/Consulta';
import Enfermeiros from './Pages/Enfermeiros';
import Home from './Pages';

const routes = [{
  path: '/agendamento',
  name: 'Agendamento',
  component: Agendamento,
  visible: true,
},
{
  path: '/consulta',
  name: 'Consulta',
  component: Consulta,
  visible: true,
},
{
  path: '/enfermeiros',
  name: 'Enfermeiros',
  component: Enfermeiros,
  visible: true,
},
{
  path: '/',
  name: 'Home',
  component: Home,
  visible: false,
},
];

const Routes = () => (
  <BrowserRouter>
    <Header routes={routes} />
    <Switch>
      {routes.map(({ component, path }) => (
        <Route
          key={path}
          path={path}
          component={component}
          exact
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
