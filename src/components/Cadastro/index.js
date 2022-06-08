import React from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import styles from '../../styles/cadastro'

const Cadastro = ({navigation}) =>{

    return(
  
      <View style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../styles/assets/controle.png')} />
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.iconSenha}>

          </View>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="E_mail" style={styles.inputSenha} />
            <TextInput placeholder="Senha" style={styles.inputSenha} />
            <TextInput placeholder="Confirme sua senha" style={styles.inputSenha} />
            <TouchableOpacity onPress={() => navigation.navigate('Navigation')} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.cadastrar}>Ja possuo uma conta</Text></TouchableOpacity>
            
        </View>
      </View>
  
    )
  
   
  }
  
  export default Cadastro