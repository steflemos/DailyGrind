import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {TextInput} from 'react-native-paper'
import styles from './styles'


export const dadosUsuario = []
const Cadastro = ({navigation}) =>{
  const [usuario, setUsuario] = useState([]);
  //const [aDadosUsuario, setADadosUsuario] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMessageEmail, setErrorMessageEmail] = useState(null)
  const [errorMessageSenha, setErrorMessageSenha] = useState(null)
  const [errorMessageNome, setErrorMessageNome] = useState(null)
  const [confirm, setConfirm] = useState('');
  const ptsXp = 0;
  const [error, setError] = useState(null);
     
  const getUsuario = async () => {
     try{
          const response = await fetch('http://localhost:3000/usuario')
          const data = response.json()
          data.then(
            (val) => setUsuario(val)
          )
          // Object.keys(data.data).forEach(k => {
          //      console.log('key is', k);
          //      console.log('value is', data.data[k]);
          //   });
          //console.log(aDadosUsuario);
        } catch(error){
          console.log('Erro: ' + error)
          setUsuario([])
        }
   }
//   const verificaEmail = async emailUsuario => {
//      const data = getUsuario();
//      if([data.email].includes(emailUsuario)) {
//           console.log("tem" + data.email + emailUsuario);
//       }
//       console.log("n tem " + data.email + emailUsuario);
//   }

  const postUsuario = async () => {
    console.log(ptsXp);
     try {
          const requestOptions = {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  apelido: name,
                  email: email,
                  senha: passwordInput,
                  pontos_recompensa: ptsXp,
              })
          }
          await fetch('http://localhost:3000/usuario/', requestOptions)
          navigation.navigate('Login')
      } catch (error) {
          console.log('Erro:' + error)
          setUsuario('')
          setEmail('')
          setPasswordInput('')
          setName('')
      }
}
const getUsuarioDados = () => {
  console.log(email, name)
  if(email.length > 2 && email.includes('@',3) && email.includes('.',5)){
       if(name.length > 3){
            if(!name.includes(' ',0)){
               if(passwordInput == confirm){
                 if(usuario.find((dados) => {return dados.email === email}) == undefined){
                      if(usuario.find((dados) => {return name === dados.name}) == undefined){
                           dadosUsuario.push({email: email, apelido: name, senha: passwordInput, pontos_recompensa: ptsXp});
                         //   if(verificaEmail(email) == true){
                         //   postUsuario();
                         //   }else{
                         //      console.log('fudeu, email ja registrado');
                         //   }
                          postUsuario();
                                    
                      }else{
                           console.log('usuario existe')
                      }
                 }else{
                      setErrorMessageNome(null)
                      setErrorMessageSenha(null)
                      setErrorMessageEmail("Email já cadastrado")
                 }
               }else{
                    setErrorMessageSenha("Senhas diferentes, tente novamente")
                    setErrorMessageNome(null)
                    setErrorMessageEmail(null)
               }
            }else{
                 console.log('Nome incorreto')
            }
       }else{
            setErrorMessageNome("Apelido muito curto")
            setErrorMessageEmail(null)
            setErrorMessageSenha(null)
       }
  }else{
       setErrorMessageEmail("Email inválido!")
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
            label="Escolha um apelido"
            style={styles.input} 
            type="text"
            left={<TextInput.Icon name="account" color = "#615D6C"/>}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
            />
            <Text style={styles.mensagemErro}>{errorMessageNome}</Text>

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
            <Text style={styles.mensagemErro}>{errorMessageEmail}</Text>

            <TextInput 
            onChangeText={passwordInput => setPasswordInput(passwordInput)}
            value={passwordInput}
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
            onChangeText={confirm => setConfirm(confirm)}
            label="Confirmar"
            left={<TextInput.Icon name="lock" color = "#615D6C"/>}
            style={styles.input}
            placeholder='***********'
            secureTextEntry={true}
            activeUnderlineColor="#615D6C"
            underlineColor="#615D6C"
           
            />
            <Text style={styles.mensagemErro}>{errorMessageSenha}</Text>
           
            {/* <TouchableOpacity onPress={() => salvar()} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={() => getUsuarioDados()} style={styles.btnLogin}><Text style={styles.textBtnLogin}>Cadastrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.cadastrar}>Ja possuo uma conta</Text></TouchableOpacity>
            
        </View>
      </View>
  
    )
  
   
  }
  
  export default Cadastro