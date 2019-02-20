import React from 'react';
import { View, Button, Text } from 'react-native';

const Home = ({ navigation }) => (
<View style={{flex: 10 }}>
    <Button 
      title="Listar Produtos"
      onPress={() => navigation.navigate('ListaProdutos') }
    />

    <Button 
      title="Cadastrar Novo"
      onPress={() => navigation.navigate('About') }
    />
  </View>
);

Home.navigationOptions = {
  title: 'Home',
}

export default Home;