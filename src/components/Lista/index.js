import React from "react";
import { View, Image,Text } from "react-native";
import styles from "../../styles/lista";
import {FontAwesome} from '@expo/vector-icons'


const Lista = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Lista de Tarefas</Text>
                <View style={styles.containerLista}>
                    <View style={styles.tarefaCriada}>
                        <Text style={styles.textTarefa}>Tomar 2L de Àgua</Text>
                        <FontAwesome name="check-square-o" size={35} color={"#5DC277"}/>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default Lista