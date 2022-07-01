import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/ajuda";
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
        <View style = {styles.main}>
        <View style ={styles.containerSobre}>
            <View styles = {styles.textos}>
            <Text style = {styles.oque}>Como adicionar uma tarefa?</Text>
            <Text style = {styles.text1}>Na tela de Tarefas, clique no botão (+) e preencha os campos da tela de Nova Tarefa.</Text>
            <Text style = {styles.qual}>Como excluir uma tarefa?</Text>
            <Text style = {styles.text2}>O objetivo do DailyGrind é ajudá-lo organizar sua rotina de forma simples e divertida.</Text>
            </View>
        </View>
        </View>
        </View>
    )
}

export default Ajuda;