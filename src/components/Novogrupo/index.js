import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/novogrupo";
import {FontAwesome} from '@expo/vector-icons'
import DatePicker from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";




const Novogrupo = () => {
    
    const [data, setData] = useState()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Novo Grupo</Text>
            </View>
            <View style={styles.main}>
            <View style={styles.inputs}>
                <TextInput placeholder="Nome da tarefa" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
                <TextInput placeholder="Descrição" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
            </View>
    <View style ={{alignItems: 'center'}}>
            <View style={styles.viewPrioridade}>
                <Text style=
                {styles.textAdd}>
                    Adicionar Participante
                </Text>
                 <Text style={styles.TextEmail}>Email do participante</Text>
        <View style={styles.ViewImput}>
                <TextInput style={styles.inputEmail}>
        
                </TextInput>
         </View>
            </View>
    </View>
        

            </View>
            
        </View>
    )
}

export default Novogrupo