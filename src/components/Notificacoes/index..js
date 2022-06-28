import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/notificacoes";
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Notificacoes = ({navigation}) => {
    
    return(
        <View style={styles.container}>
        <View style={styles.header}>

            <View style ={styles.viewBtn}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Opcoes")}>
                        <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
         </TouchableOpacity>

         </View>
            <Text style={styles.titulo}>Notificações</Text>
        </View>
        </View>
    )
}

export default Notificacoes;