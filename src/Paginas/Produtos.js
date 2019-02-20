import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';

export default class Produtos extends React.Component {
  
  state = {
    produtos: []
  }

  componentDidMount(){
    this.listarProdutos();
  }

  listarProdutos(){
      axios.get('http://almoxarifado-api.herokuapp.com/api/produtos')
      .then(res => {
      const produtos = res.data;
      this.setState({ produtos });
      })    
  };

  salvarProdutos(){
      axios.post('http://almoxarifado-api.herokuapp.com/api/produtos', {produto})
      .then(res => {})    
  }

  render() {
    return (



       <SafeAreaView >
        <FlatList
          data={this.state.produtos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.nome}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>

    );
  }
}

  const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});
