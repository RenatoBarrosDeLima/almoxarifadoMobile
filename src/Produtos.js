import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from 'axios';

class Produtos extends React.Component {

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

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.produtos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.nome}</Text>
                <Text style={styles.text}>{item.quantidade}</Text>
                <Text style={styles.text}>{item.valor}</Text>
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

export default Produtos;