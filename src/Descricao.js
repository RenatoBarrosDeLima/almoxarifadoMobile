import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text, Button } from 'react-native'
import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get('screen').width

export default class Descricao extends Component {
    static navigationOptions = {
        title: 'Descricão'
    }

    render() {

        const { produto } = this.props.navigation.state.params
        return (
         <ScrollView>
             <Text style={{padding:10, fontSize:30}}>{produto.nome}</Text>
             <Text style={{padding:10}}>  {'Quantidade: '}  {produto.quantidade}</Text> 
             <Text style={{padding:10}}>  {'Valor: R$ '} {produto.valor}{',00'}</Text>
         </ScrollView> 
         

         );
    }
}