import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/new";
import {FontAwesome} from '@expo/vector-icons'
// import DatePicker from "react-native";



const New = () => {
    
    const [data, setData] = useState()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
            </View>
            <View style={styles.main}>
            <View style={styles.inputs}>
                <TextInput placeholder="Nome da tarefa" style={styles.name} placeholderTextColor="#615d6c"/>
                <TextInput placeholder="Descrição" style={styles.name} placeholderTextColor="#615d6c"/>
            </View>
            {/* <View>

            <DatePicker
            format="DD-MM-YYYY"
            style={styles.data}
            date = {data}
            onDateChange = {() => setData('')}
       
             />   

            </View> */}
            <View style={styles.prioridade}>
            <View style={styles.viewPrioridade}>
                <Text style={styles.text}>Definir prioridade</Text>
        <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.botao}></TouchableOpacity>
                 <Text>Urgente</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.botao}></TouchableOpacity>
                 <Text>Média</Text>
                </View>
        </View>
        <View style={{flexDirection:'row'}}>

                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.botao}></TouchableOpacity>
                 <Text>Alta</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.botao}></TouchableOpacity>
                 <Text>Baixa</Text>
                </View>
                </View>
            </View>
            </View>

            </View>
            
        </View>
    )
}

export default New