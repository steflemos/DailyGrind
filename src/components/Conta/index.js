import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/new";
import {FontAwesome} from '@expo/vector-icons'

const Conta = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.titulo}>.</Text>
                <View style={styles.containerLista}>
               
                </View>
            </View>
        </View>
    )
}

export default Conta;