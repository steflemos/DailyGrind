import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'





const Login = ({navigation}) =>{
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  function validateLogin() {
    if ((emailInput, passwordInput) !== '') {
      signIn({ email: emailInput, password: passwordInput })
    } else {
      setErrorMessage(null)
      setErrorMessage("PREENCHA OS CAMPOS!")
      return;
    }
  }

    return(
  
      <View style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../../styles/assets/controle.png')} />
        <Text style={styles.TextLogin}>
            DailyGrind
        </Text>
        </View>
        <View style={styles.containerInputs}>
        
            <TextInput 
            value={emailInput}
            onChangeText={setEmailInput}
            label="E-mail"
            placeholder='email@email.com' style={styles.input}
            type="text"
            left={<TextInput.Icon name="account" color = "#615D6C" />}
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
            <Text style={styles.mensagemErro}>{errorMessage}</Text>

           

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={validateLogin}
              >
              <Text style={styles.textBtnLogin}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Cadastro')} 
            >
            <Text  style={styles.cadastrar}>Cadastrar-se</Text>
            </TouchableOpacity>
        </View>
      </View>
  
    )
  
  
  }
  
  export default Login