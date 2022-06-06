import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import styles from '../../styles/login'

const Login = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../styles/assets/controle.png')} />
        <Text style={styles.TextLogin}>
            DailyGrind
        </Text>
        </View>
        <View style={styles.containerInputs}>
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="Senha" style={styles.inputSenha} />
            <TouchableOpacity onPress={() => navigation.navigate('Navigation')} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} ><Text  style={styles.cadastrar}>Cadastrar-se</Text></TouchableOpacity>
        </View>
      </View>
  
    )
  
  
  }
  
  export default Login