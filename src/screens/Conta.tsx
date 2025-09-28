import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './ContaStyle';

export function Conta({navigation}:any) {

  function navToHome(){
    navigation.navigate('Home');
  }
  function navToGallery(){
    navigation.navigate('Gallery');
  }
  function navToCriarConta(){
    navigation.navigate('CriarConta');
  }
  function navToServicos(){
    navigation.navigate('Servicos');
  }
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
        <Pressable style={styles.botao} onPress={navToHome}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={navToGallery}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={navToCriarConta}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={navToServicos}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
    </View>
  );
}