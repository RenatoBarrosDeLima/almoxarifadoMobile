import React from 'react';
import { TouchableOpacity, View, FlatList, Text, Image } from 'react-native';
import axios from 'axios';

export default class Produtos extends React.Component {

  static navigationOptions = {
        title: 'Lista de Produtos'
    }
  
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

    _renderItem = ({item}) => {
        return  (
            <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
                <Text style={{marginLeft: 10}}>{item.nome}</Text>
            </TouchableOpacity>
        )
    }

    _onItemPress = (item) => {
        this.props.navigation.navigate('Descricao', {produto: item})
    } 

    render() {
        return (
            <FlatList 
                data={this.state.produtos}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            />
        )
    }
}