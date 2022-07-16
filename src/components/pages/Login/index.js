import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import styles from './styles';
import { TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export const usuarioLogado = []


 function Login  ({navigation}) {
  const [usuario, setUsuario] = useState([]);
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  const getUsuario = async () => {
    try{
         const response = await fetch('http://localhost:3000/usuario')
         const data = response.json()
         data.then(
           (val) => setUsuario(val)
         )
       } catch(error){
         console.log('Erro: ' + error)
         setUsuario([])
       }
  }

  getUsuario()

  const [loading, setLoading] = useState(false)
  const [textLoading, setTextLoading] = useState('Carregando, aguarde um momento.')
  const [loadingColor, setLoadingColor] = useState('#fff')
  const [loadingBackground, setLoadingBackground] = useState('none')

  const verificaLogin = async () => {
    
    setTimeout(() => {
      console.log(usuario)
      if(usuario.find((login) => {return emailInput === login.email || login.nome === emailInput }) != undefined){
           console.log('Logado', usuario.filter(login => {return emailInput === login.email}))
           if(usuario.find((login) => {return passwordInput === login.senha}) != undefined){
                setTimeout(() => {
                     usuarioLogado.push(usuario.find((login) => {return login.email === emailInput && passwordInput === login.senha}))
                     console.log(usuarioLogado)
                     setTimeout(() => {
                          setLoading(false)
                          navigation.navigate('Lista')
                     },400)
                     
                }, 600)
           }else{
                console.log('error2')
                setTimeout(() => {
                     setTextLoading('Email ou senha errados!')
                     setLoadingBackground('#f01707')
                     setTimeout(() => {
                          setLoading(false)
                          setTextLoading('Carregando, aguarde um momento.')
                          setLoadingBackground('none')
                     },3000)
                },400)
           }
      }else{
           console.log('error1')
           setTimeout(() => {
                setTextLoading('Email ou senha errados!')
                setLoadingBackground('#f01707')
                setTimeout(() => {
                     setLoading(false)
                     setTextLoading('Carregando, aguarde um momento.')
                     setLoadingBackground('none')
                },3000)
           },400)
           
      }
 }, 1000)   

  }

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
              // onPress={() =>navigation.navigate('Navigation')}

              onPress={() => verificaLogin()} 
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