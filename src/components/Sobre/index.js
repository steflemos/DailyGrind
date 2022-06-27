import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/opcoes.js";
import {FontAwesome} from '@expo/vector-icons'


const Sobre = ({navigation}) => {
    
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

export default Sobre;