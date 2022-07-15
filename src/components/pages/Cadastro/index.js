import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {TextInput} from 'react-native-paper'
import styles from './styles'
import api from '../../../api/index'


export const dadosUsuario = []
const Cadastro = ({navigation}) =>{
  const [usuario, setUsuario] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirm, setconfirm] = useState('');
  const [error, setError] = useState(null);
 

  const getUsuarios = async () => {
    try{
        const response = await fetch('http://localhost:3000/usuario')
        const data = response.json()
        data.then(
            (val) => setUsuario(val)
        )
    }catch(error){
        console.log(error)
    }
}
  
getUsuarios()

const getUsuarioDados = () => {
          
  console.log(email, name)
  if(email.length > 2 && email.includes('@',3) && email.includes('.',5)){
       if(name.length > 3){
            if(!name.includes(' ',0)){
                 if(usuario.find((dados) => {return dados.email === email}) == undefined){
                      if(usuario.find((dados) => {return name === dados.name}) == undefined){
                           dadosUsuario.push({email: email, apelido: name})
                      }else{
                           console.log('usuario existe')
                      }
                 }else{
                      console.log('email existe')
                 }
            }else{
                 console.log('Nome incorreto')
            }
       }else{
            console.log('nome curto')
       }
  }else{
       console.log('email errado')
  }
}

  // const validarCadastro = () =>{
  //   if((name, email, passwordInput, confirm !== "")){
  //     signIn({nome : name, email : email, password : passwordInput, confirmar : confirm })
  //   }else{
  //     setError(null)
  //     setError('PREENCHA TODOS OS CAMPOS')
  //     return
  //   }


  // }
  
  


    return(
  
      <View style={styles.container}>
        <View style={styles.imgControle}>
        <Image style={styles.controle} source={require('../../../styles/assets/controle.png')} />
        </View>
        <View style={styles.containerInputs}>
          <View style={styles.iconSenha}>

          </View>
            <TextInput 
            onChangeText={name => setName(name)}
            value={name}
            label="Nome Completo"
            style={styles.input} 
            type="text"
            left={<TextInput.Icon name="account" color = "#615D6C"/>}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
            />

            <TextInput  onChangeText={email => setEmail(email)}
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
            onChangeText={password => setPasswordInput(password)}
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
            <TouchableOpacity onPress={() => getUsuarioDados} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.cadastrar}>Ja possuo uma conta</Text></TouchableOpacity>
            
        </View>
      </View>
  
    )
  
   
  }
  
  export default Cadastro