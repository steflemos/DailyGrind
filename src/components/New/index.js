import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/new";
import {FontAwesome} from '@expo/vector-icons'


const New = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
            </View>
            <View style={styles.main}>

            </View>
            
        </View>
    )
}

export default New