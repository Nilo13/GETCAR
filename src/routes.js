import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicial from './pages/Inicial'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Todos from './pages/Todos'
import Publicacao from './pages/Publicacao'
import Publicado from './pages/Publicado'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicial} />
        <Route path="/Login" component={Login} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Todos" component={Todos} />
        <Route path="/Publicacao" component={Publicacao} />
        <Route path="/Publicado" component={Publicado} />
      </Switch>
    </BrowserRouter>
  )
}