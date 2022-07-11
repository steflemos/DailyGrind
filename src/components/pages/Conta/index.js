import React, {useState} from "react";
import { View, Image,Text, TouchableOpacity, TextInput, StyleSheet, Modal, ScrollView } from "react-native";
import styles from "./styles";
import {MaterialIcons, FontAwesome, Ionicons} from '@expo/vector-icons'


const Conta = ({navigation}) => {
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAberto2, setModalAberto2] = useState(false);
    return(
        <View style={styles.container}>
            <ScrollView>
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
                    <Modal visible={modalAberto} transparent={true}>
                    
                    <View style={styles.containerModal}>
                        <View style={StyleSheet.modalContent}>
                            <View style={{
                                flexFlow: "end",
                                justifyContent:'space-between',
                                flexDirection:'row',
                                width: "100%",
                            }}>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto(false)}>
                                    <Ionicons name='close-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto(false)}>
                                    <Ionicons name='checkmark-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.containerInputs}>
                            
                            <TextInput placeholder="Novo apelido" style={styles.input}
                            />

                            </View>
                        </View>
                    </View>
                    
                </Modal>
                <Modal visible={modalAberto2} transparent={true}>
                    
                    <View style={styles.containerModal}>
                        <View style={StyleSheet.modalContent}>
                            <View style={{
                                flexFlow: "end",
                                justifyContent:'space-between',
                                flexDirection:'row',
                                width: "100%",
                            }}>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto2(false)}>
                                    <Ionicons name='close-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto2(false)}>
                                    <Ionicons name='checkmark-circle' size={50} color='white'></Ionicons>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.containerInputs}>
                            
                            <TextInput placeholder="Nova Senha" style={styles.input}
                            />

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
                                    <Text style={styles.textContaDadosTitle}>
                                        Apelido
                                    </Text>
                                    <TouchableOpacity style={styles.btnEditarDados} onPress={() => setModalAberto(true)}>
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
                                <TouchableOpacity style={styles.btnEditarDados} onPress={() => setModalAberto2(true)}>
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
            </ScrollView>
        </View>
        
    )
}

export default Conta;