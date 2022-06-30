import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/sobre";
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Ajuda = ({navigation}) => {
    
    return(
        <View style={styles.container}>
        <View style={styles.header}>

            <View style ={styles.viewBtn}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Navigation")}>
                        <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
         </TouchableOpacity>

         </View>
            <Text style={styles.titulo}>Ajuda</Text>
        </View>
        </View>
    )
}

export default Ajuda;