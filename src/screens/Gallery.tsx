import React from 'react';
import { Pressable, View, Text } from 'react-native';

import { styles } from './GalleryStyle';

export function Gallery({navigation}:any) {

  function navToHome(){
    navigation.navigate('Home');
  }
  function navToConta(){
    navigation.navigate('Conta');
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
        <Pressable style={styles.botao} onPress={navToConta}>
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