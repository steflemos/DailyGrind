import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from "../../styles/sobre";
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Sobre = ({navigation}) => {
    
    return(
        <View style={styles.container}>
        <View style={styles.header}>

            <View style ={styles.viewBtn}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Navigation")}>
                        <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
         </TouchableOpacity>

         </View>
            <Text style={styles.titulo}>Sobre o App</Text>
        </View>
        <View style = {styles.main}>
        <View style ={styles.containerSobre}>
            <ScrollView style = {styles.textos}>
            <Text style = {styles.oque}>O que é?</Text>
            <Text style = {styles.text1}> DailyGrind é um aplicativo de tarefas criado pelo grupo 4Code onde a cada tarefa que você conclui, pontos de expêriencia são ganhos. Conquistas são desbloqueadas ao longo da sua jornada no app.</Text>
            <Text style = {styles.qual}>Qual o objetivo do DailyGrind?</Text>
            <Text style = {styles.text2}> O objetivo do DailyGrind é ajudá-lo a organizar sua rotina de forma simples e divertida. As conquistas e o sistema de pontos ajuda o usuário a manter-se inspirado ao longo da sua jornada.</Text>
            </ScrollView>
        </View>
        </View>
        </View>
    )
}

export default Sobre;