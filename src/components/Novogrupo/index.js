import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/novogrupo";
import {FontAwesome,MaterialIcons, Feather} from '@expo/vector-icons'
import DatePicker from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";




const Novogrupo = ({navigation}) => {
    
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
                <View>
                <Text style={styles.textAdd}>
                    Adicionar Participante
                </Text>

            <View style ={{alignItems:'center'}}>

                <View style ={styles.ViewAddParticipante}>
                 <Text style={styles.TextEmail}>Email do participante</Text>
                <View style={styles.ViewImput}>
                <TextInput style={styles.inputEmail}></TextInput>

                <View style={styles.viewBtn}>
                <TouchableOpacity onPress={() => navigation.navigate("New")} 
                style={styles.btnAdd}>
                   <MaterialIcons name="add"  size={25} color='black'/>
                </TouchableOpacity>
            </View>
                </View>
                </View>

            </View>
            </View>
          
            </View>
    </View>
    <View style={styles.urgenteMedia}>
        
        <View style={styles.urgente}>

        <View style={styles.viewBtnCancel}>
                <TouchableOpacity onPress={() => navigation.navigate("Ranking")} 
                style={styles.btnAddCancel}>
                   <Feather name="x"  size={25} color='#6F8AB7'/>
                </TouchableOpacity>
            </View>
         <Text style={styles.texto}>Cancelar</Text>
        </View>

       

        <View style={styles.medio}>
        <View style={styles.viewBtnCancel}>
                <TouchableOpacity onPress={() => navigation.navigate("Ranking")} 
                style={styles.btnAddCancel}>
                   <Feather name="check"  size={25} color='#6F8AB7'/>
                </TouchableOpacity>
            </View>
         <Text style={styles.texto}>Salvar</Text>
         
        </View>
        
</View>
        

            </View>
            
        </View>
    )
}

export default Novogrupo