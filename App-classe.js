import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends Component {

state = {
  nome : "Wagner"
}

mudarNome = () =>{
  this.setState({nome:"capitão caverna"})
}

  render(){
    return (
      <View style={styles.container}>
        <Text>{this.state.nome}</Text>      
        <TextInput value={this.state.nome}/>
        <Button title="pressione" onPress={this.mudarNome}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
