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
                        <View style={styles.nickBox}>
                            <View style={styles.usuarioBox}>
                                <View style={styles.view}>
                                    <View style={styles.iconBox}>
                                        <Image style={styles.imgIcon} source={require('../../styles/assets/batman.png')} />
                                    </View>
                                </View>
                                
                            </View>

                            <View style={styles.dadosContaBoxNick}>
                                <View style={styles.upperDadosBox}>
                                    <Text style={styles.textContaDadosTitle}>
                                        Apelido
                                    </Text>
                                    <TouchableOpacity style={styles.btnEditarDados}>
                                        <FontAwesome name='edit' size={25} color='black'></FontAwesome>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textContaDadosSenha}>
                                        TeTeFANI666
                                </Text>
                            </View>
                        </View>
                        <View style={styles.dadosContaBox}>
                            <View style={styles.upperDadosBox}>
                                <Text style={styles.textContaDadosTitleEmail}>
                                    Email
                                </Text>
                            </View>
                            <Text style={styles.textContaDados}>
                                vini22bubu@gmail.com
                            </Text>
                        </View>
                        
                        <View style={styles.dadosContaBox}>
                            <View style={styles.upperDadosBox}>
                                <Text style={styles.textContaDadosTitle}>
                                    Senha
                                </Text>
                                <TouchableOpacity style={styles.btnEditarDados}>
                                    <FontAwesome name='edit' size={25} color='black'></FontAwesome>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textContaDadosSenha}>
                                    **************
                            </Text>
                        </View>
                        
                      
                        <TouchableOpacity style={styles.dadosContaBoxDelete}>
                            <Text style={styles.btnDeletar}>Deletar</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>
            </View>
        </View>
        
    )
}

export default Opcoes;