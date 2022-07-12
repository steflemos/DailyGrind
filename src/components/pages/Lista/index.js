import React, {useState} from "react";
import { View, Image,Text, TouchableOpacity, Modal, TextInput
 } from "react-native";
import styles from "./styles";
import {FontAwesome,MaterialIcons, Ionicons} from '@expo/vector-icons'


const Lista = ({navigation}) => {
    const [modalAberto, setModalAberto] = useState(false);
    
    return(
        
        <View style={styles.container}>
            <Modal visible={modalAberto} transparent={true}>
                    
                    <View style={styles.containerModal}>
                        <View style={styles.modalContent}>
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
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Lista de Tarefas</Text>
                <View style={styles.containerLista}>
                    <TouchableOpacity style={styles.btnTarefa} onPress={() => setModalAberto(true)}>
                        <View style={styles.tarefaCriada}>
                            <Text style={styles.textTarefa}>Tomar 2L de Àgua</Text>
                            <FontAwesome name="check-square-o" size={35} color={"#5DC277"}/>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.viewBtn}>
                <TouchableOpacity onPress={() => navigation.navigate("New")} 
                style={styles.btnAdd}>
                   <MaterialIcons name="add"  size={35} color='black'/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Lista