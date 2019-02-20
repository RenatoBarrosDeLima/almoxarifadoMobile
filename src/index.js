// src/index.js

import Home from './Paginas/Home';
import Page2 from './Paginas/Page2';
import Produtos from './Paginas/Produtos';
import Inicio from './Inicio';
import Descricao from './Descricao'


import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Inicio: Inicio,

  Home: Home,

  ListaProdutos: Produtos,

  Descricao: Descricao,

});

export default { StackNavigator };