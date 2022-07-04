import React from "react";
import { View, Image,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/conta.js";
import {FontAwesome, Ionicons} from '@expo/vector-icons'


const Opcoes = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Navigation")}>
                        <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.titulo}>Conta</Text>
            </View>
            <View style={styles.main}>
               
                <View style={styles.containerLista}>
                    <View style={styles.viewInputs}>
                        <View style={styles.usuarioBox}>
                            <View style={styles.view}>
                                <View style={styles.viewNick}>
                                    <Text style={styles.textContaDadosTitle}>Nome de usuário</Text>
                                    <Text>Stef_Fodona</Text>
                                </View>
                                <TouchableOpacity style={styles.btnEditarDados}><Text>Editar nome de usuário</Text></TouchableOpacity>
                                </View>
                        </View>

                        <View style={styles.dadosContaBox}>
                            <View style={styles.upperDadosBox}>
                                <Text style={styles.textContaDadosTitle}>Email</Text>
                                <TouchableOpacity style={styles.btnEditarDados}>
                                <Text styles={styles.textDadoUsuario}>Editar email</Text>
                            </TouchableOpacity>
                            </View>
                            <Text style={styles.textContaDados}>vini22bubu@gmail.com</Text>
                        </View>
                        
                        <View style={styles.dadosContaBox}>
                            <Text style={styles.textContaDadosTitle}>Senha</Text>
                            <TouchableOpacity style={styles.btnEditarDados}><Text>Editar senha</Text></TouchableOpacity>
                        </View>

                        <View style={styles.dadosContaBox}>
                            <TouchableOpacity><Text style={styles.btnDeletar}>Deletar</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </View>
        
    )
}

export default Opcoes;