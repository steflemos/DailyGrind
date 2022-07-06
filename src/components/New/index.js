import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/new";
import {FontAwesome} from '@expo/vector-icons'
import DatePicker from "react-native";




const New = () => {
    
    const [data, setData] = useState()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
            </View>
            <View style={styles.main}>
            <View style={styles.inputs}>
                <TextInput placeholder="Nome da tarefa" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
                <TextInput placeholder="Descrição" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
                <TextInput style={styles.inputDate} placeholder="Data" multiline={true} placeholderTextColor="#615d6c"/>  
            </View>
            <View style={styles.prioridade}>
            <View style={styles.viewPrioridade}>
                <Text style={styles.text}>Definir prioridade</Text>

     <View style={styles.botoes}>          
        <View style={styles.urgenteMedia}>
        
                <View style={styles.urgente}>
                 <TouchableOpacity style={styles.botao}></TouchableOpacity>
                 <Text style={styles.texto}>Urgente</Text>
                </View>

               

                <View style={styles.medio}>
                 <TouchableOpacity style={styles.botao2}></TouchableOpacity>
                 <Text style={styles.texto}>Média</Text>
                 
                </View>
                
        </View>

        <View style={styles.altaBaixa}>

                <View style={styles.alta}>
                 <TouchableOpacity style={styles.botao3}></TouchableOpacity>
                 <Text style={styles.texto}>Alta</Text>
                </View>
                <View style={styles.baixa}>
                 <TouchableOpacity style={styles.botao4}></TouchableOpacity>
                 <Text style={styles.texto}>Baixa</Text>
                </View>
        </View>
    </View>

            </View>
            </View>
            <View style={styles.position}>
          <View style={styles.recompensa}>
            <Text style={styles.text}>Pontos de recompensa</Text>
            <View style={styles.row}>
            <FontAwesome style={styles.diamont} name='diamond' size={20} color = '#615d6c'/>
            <Text style={styles.pontos}>0RP</Text>
            </View>
          </View>
          </View>
            </View>
            
        </View>
    )
}

export default New