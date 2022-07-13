import React, {useState} from "react";
import { View, Image,Text, TouchableOpacity, Modal, TextInput
 } from "react-native";
import styles from "./styles";
import {FontAwesome,MaterialIcons, Ionicons} from '@expo/vector-icons'

const ItemLista = (props) =>{
    return(
        
    <View style={styles.textContainer}>       
        <Text style={styles.textTarefa}>{props.tarefa}</Text>
        <Text style={styles.textTarefa}>{props.index}</Text>
        <FontAwesome name="check-square-o" size={35} color={"#5DC277"}/>
    </View>

    )
}
export default ItemLista;