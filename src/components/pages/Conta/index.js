import React, {useState} from "react";
import { View, Image,Text, TouchableOpacity, TextInput, StyleSheet, Modal, ScrollView } from "react-native";
import styles from "./styles";
import {MaterialIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { KeyboardAvoidingView } from "react-native";
import { UsuarioLogado } from "../Login";
import { ImagemConta } from "../Conquistas";


const Conta = ({navigation}) => {
    console.log(ImagemConta[0]);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAberto2, setModalAberto2] = useState(false);
    const [usuario, setUsuario] = useState([]);
    //const [aDadosUsuario, setADadosUsuario] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirm, setConfirm] = useState('');
    const [newPasswordInput, setNewPasswordInput] = useState('');
    const [newApelidoInput, setNewApelidoInput] = useState('');
    const [error, setError] = useState(null);
    


    
    const putUsuarioSenha = async () => {
        if ((UsuarioLogado[0].senha == ApelidoInput && newPasswordInput == confirm)) {
            try {
                console.log(newPasswordInput);
                const requestOptions = {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        apelido: UsuarioLogado[0].apelido,
                        email: UsuarioLogado[0].email,
                        pontos_recompensa: UsuarioLogado[0].pontos_recompensa,
                        senha: newPasswordInput
                    })
                }
                const response = await fetch('http://localhost:3000/usuario/' + UsuarioLogado[0].idusuario, requestOptions)
                const data = response.json()
                data.then(
                  (val) => setUsuario(val)
                )
                console.log(UsuarioLogado[0]);
                UsuarioLogado[0].senha = newPasswordInput
                console.log(UsuarioLogado[0]);
                setModalAberto2(false)
            } catch (error) {
                console.log('Erro:' + error)
                setNewPasswordInput('')
                setPasswordInput('')
                setConfirm('')
            }
        } else {
            
        }


    }
    const putUsuarioApelido = async () => {
        if ((newApelidoInput != "")) {
            try {
                console.log(newApelidoInput);
                const requestOptions = {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        senha: UsuarioLogado[0].senha,
                        email: UsuarioLogado[0].email,
                        pontos_recompensa: UsuarioLogado[0].pontos_recompensa,
                        apelido: newApelidoInput
                    })
                }
                const response = await fetch('http://localhost:3000/usuario/' + UsuarioLogado[0].idusuario, requestOptions)
                const data = response.json()
                data.then(
                  (val) => setUsuario(val)
                )
                console.log(UsuarioLogado[0]);
                UsuarioLogado[0].apelido = newApelidoInput
                console.log(UsuarioLogado[0]);
                setModalAberto(false)
            } catch (error) {
                console.log('Erro:' + error)
                setNewApelidoInput('')
            }
        } else {
            
        }


    }

    
  const deleteUsuario = async () => {
    const requestOptions = {
      method: 'delete',
      headers: {'Content-type': 'application/json'}
    }
    try{
      await fetch('http://localhost:3000/usuario/' + id, requestOptions)
      navigation.navigate('Login')
    } catch(error){
      console.log("Erro: " + error)
    }
  }


    return(
        
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
            </TouchableOpacity>
                {/* <Text style={styles.numerosHeader}>3/3</Text> */}
                <Text style={styles.levels} >XP {UsuarioLogado[0].pontos_recompensa}</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Conta</Text>
                <View style={styles.containerLista}>
                    <ScrollView style= {{ width:'100%'}}>
                <Modal visible={modalAberto} transparent={true}>
                    
                    <View style={styles.containerModal2}>
                        <View style={StyleSheet.modalContent2}>
                            <View style={{
                                flexFlow: "end",
                                justifyContent:'space-between',
                                flexDirection:'row',
                                width: "100%",
                            }}>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto(false)}>
                                    <Ionicons name='close-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => putUsuarioApelido()}>
                                    <Ionicons name='checkmark-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.containerInputs}>
                            
                            <TextInput placeholder="Novo apelido" value={newApelidoInput} onChangeText={(apelido) => setNewApelidoInput(apelido)} style={styles.input}
                            />

                            </View>
                        </View>
                    </View>
                    
                </Modal>

                <Modal visible={modalAberto2} transparent={true}>

                 
                    
                    <View style={styles.containerModal2}>
                        <View style={StyleSheet.modalContent2}>
                            <View style={{
                                flexFlow: "end",
                                justifyContent:'space-between',
                                flexDirection:'row',
                                width: "100%",
                            }}>
                                <TouchableOpacity style={styles.btnExitModal2} onPress={() => setModalAberto2(false)}>
                                    <Ionicons name='close-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExitModal2} onPress={() => putUsuarioSenha()}>
                                    <Ionicons name='checkmark-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.containerInputs}>
                            
                            <TextInput placeholder="Senha Atual" onChangeText={passwordInput => setPasswordInput(passwordInput)}
                            value={passwordInput}
                            style={styles.input}/>
                            <TextInput placeholder="Nova Senha"onChangeText={newPassword => setNewPasswordInput(newPassword)}
                            value={newPasswordInput} style={styles.input}/>
                            <TextInput placeholder="Repita a Nova Senha"onChangeText={confirm => setConfirm(confirm)}
                            value={confirm} style={styles.input}/>

                            </View>
                        </View>
                    </View>
                  
                    
                </Modal>

                <View style={styles.viewInputs}>

                    <View style={styles.nickBox}>
                        <View style={styles.usuarioBox}>
                            <View style={styles.view}>
                                <View style={styles.iconBox}>
                                <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                                </View>  
                            </View>
                        </View>

                        <View style={styles.dadosContaBoxNick}>

                            <View style={styles.upperDadosBox}>
                            <Text style={styles.textContaDadosTitle}>Apelido</Text>
                            <TouchableOpacity style={styles.btnEditarDados} onPress={() => setModalAberto(true)}>
                                <FontAwesome name='edit' size={25} color='black'></FontAwesome>
                             </TouchableOpacity>
                            </View>
                            <Text style={styles.textContaDadosSenha}>{UsuarioLogado[0].apelido}</Text>
                        </View>

                    </View>

                    <View style={styles.dadosContaBox}>
                        <View style={styles.upperDadosBox}>
                        <Text style={styles.textContaDadosTitleEmail}> Email </Text>

                        </View>
                        <Text style={styles.textContaDados}>{UsuarioLogado[0].email}</Text>

                    </View>

                    <View style={styles.dadosContaBox}>
                        <View style={styles.upperDadosBox}>
                        <Text style={styles.textContaDadosTitle}> Senha </Text>
                        <TouchableOpacity style={styles.btnEditarDados} onPress={() => setModalAberto2(true)}>
                             <FontAwesome name='edit' size={25} color='black'></FontAwesome>
                        </TouchableOpacity>
                            
                        </View>
                        <Text style={styles.textContaDadosSenha}> ************** </Text>
                    </View>
                    <TouchableOpacity style={styles.dadosContaBoxLogout}>
                            <Text style={styles.btnDeletar} onPress={() => navigation.navigate('Login')}>Sair da conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dadosContaBoxDelete}>
                            <Text style={styles.btnDeletar} onPress={() => deleteUsuario()}>Deletar</Text>
                    </TouchableOpacity>

                </View>
                
                </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Conta;