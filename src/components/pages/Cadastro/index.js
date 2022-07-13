import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {TextInput} from 'react-native-paper'
import styles from './styles'
import api from '../../../api/index'
import { set } from "react-native-reanimated";

const Cadastro = ({navigation}) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirm, setconfirm] = useState('');
  const [error, setError] = useState(null)
  

  const validarCadastro = () =>{
    if((name, email, passwordInput, confirm !== "")){
      signIn({nome : name,email : email, password : passwordInput, confirmar : confirm })
    }else{
      setError(null)
      setError('PREENCHA TODOS OS CAMPOS')
      return
    }
  }


    return(
  
      <View style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../../styles/assets/controle.png')} />
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.iconSenha}>

          </View>
            <TextInput 
            onChangeText={setName}
            value={name}
            label="Nome Completo"
            style={styles.input} 
            type="text"
            left={<TextInput.Icon name="account" color = "#615D6C"/>}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
            />

            <TextInput  onChangeText={setEmail}
            value={email}
            label="E-mail"
            placeholder='email@email.com'
            style={styles.input}
            type="text"
            left={<TextInput.Icon name="email"  color = "#615D6C" />}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"

            />

            <TextInput 
            value={passwordInput}
            onChangeText={setPasswordInput}
            label="Senha"
            left={<TextInput.Icon name="lock" color = "#615D6C"/>}
            style={styles.input}
            placeholder='***********'
            secureTextEntry={true}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
            />

            <TextInput 
            value={confirm}
            onChangeText={setconfirm}
            label="Confirmar"
            left={<TextInput.Icon name="lock" color = "#615D6C"/>}
            style={styles.input}
            placeholder='***********'
            secureTextEntry={true}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
            />
            <Text style={styles.setError}>{error}</Text>
            {/* <TouchableOpacity onPress={() => salvar()} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={() =>navigation.navigate('Navigation')} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.cadastrar}>Ja possuo uma conta</Text></TouchableOpacity>
            
        </View>
      </View>
  
    )
  
   
  }
  
  export default Cadastro