import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity,KeyboardAvoidingView } from "react-native";
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
      setErrorMessage("PREENCHA OS CAMPOS!*")
      return;
    }
  }

    return(
  
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../../styles/assets/controle.png')} />
        <Text style={styles.TextLogin}>
            DailyGrind
        </Text>
        </View>
        <KeyboardAvoidingView style={styles.containerInputs}>
        
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
              // onPress={validateLogin}
<<<<<<< HEAD:src/components/auth/Login/index.js
              onPress={() =>navigation.navigate('Navigation')}
=======
              onPress={() => navigation.navigate('Navigation')} 
>>>>>>> fcc39a67801f9a2d833d47668ce5ac29a81fb89a:src/components/pages/Login/index.js
              >
              <Text style={styles.textBtnLogin}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate('Cadastro')} 
            >
            <Text  style={styles.cadastrar}>Cadastrar-se</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
  
    )
  
  
  }
  
  export default Login