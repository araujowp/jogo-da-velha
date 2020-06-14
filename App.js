import React, {Component} from 'react';
import { Dimensions, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Jogo from './Jogo';

export default class App extends Component {
  
  state = {
    tabuleiro: Jogo.tabuleiro,
    mensagem: Jogo.mensagem 
  }
  //#dc685a LARANJA 
  //"#ecaf4f AMARELO
  //

  iniciar(){
    Jogo.iniciar()
    this.setState(
      {tabuleiro: Jogo.tabuleiro, 
       mensagem:  Jogo.mensagem})
       console.log(' iniciar ' + this.state.mensagem);
  }

  jogar(index){
    console.log('app- jogar - mensagem esta:' + this.state.mensagem);
    Jogo.jogar(index)
    this.setState({tabuleiro: Jogo.tabuleiro, 
                   mensagem:  Jogo.mensagem})
  }

  render(){
    return (
      <View style={styles.container}>
        
        <Text style={styles.mensagem} >Jogo da Velha! </Text>
        {this.state.tabuleiro.map((valor, index)=>
                                  <TouchableOpacity key={index} style={styles.peca} 
                                  onPress={()=>{this.jogar(index)} }> 
                                  <Text key={index} style={styles.pecaTexto} >{valor}</Text>
                                  </TouchableOpacity>)}
        <Text style={styles.mensagem}>{this.state.mensagem} </Text>

        <TouchableOpacity style={styles.reiniciar}
                          onPress={()=>{this.iniciar()}} >
          <Text style={styles.reiniciarTexto} >Reiniciar </Text>
        </TouchableOpacity>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: "#111"
  },
  peca:{
    width: Dimensions.get('window').width /3,
    height: Dimensions.get('window').width /3, 
    backgroundColor: "#ecaf4f", 
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  pecaTexto:{
    fontSize: 65   
  },
  reiniciar:{
    width: Dimensions.get('window').width /2,
    height: Dimensions.get('window').width /8,
    backgroundColor: '#dc685a'
  },
  reiniciarTexto:{
    fontSize: 20,
    textAlign: 'center',
    color:'white'
  },
  mensagem: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width/8,
    textAlign: 'center',
    fontSize: 30
  }

});
