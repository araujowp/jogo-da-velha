import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("Wagner")

  return (
    <View style={styles.container}>
    <Text>{nome}</Text>      
    <TextInput value={nome} onChangeText={(nome) => setNome(nome)} />
    <Button title="pressione" onPress={()=> setNome("sdfsd") } />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
