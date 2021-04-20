import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Agendamento from './Pages/Agendamento';
import Enfermeiros from './Pages/Enfermeiros';
import Home from './Pages';
import Footer from './Components/Footer';

// criação das rotas que aparecem no Header para navegação

const routes = [{
  path: '/agendamento',
  name: 'Agendamento',
  component: Agendamento,
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

// corpo da aplicação

const Routes = () => (
  <div>
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
    <Footer />
  </div>
);

export default Routes;
