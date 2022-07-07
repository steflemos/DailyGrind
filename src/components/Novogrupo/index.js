import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput,ScrollView } from "react-native";
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
        <ScrollView>
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
                <TouchableOpacity style={styles.btnAdd}>
                   <MaterialIcons name="add"  size={25} color='black'/>
                </TouchableOpacity>
                </View>
               

                </View>
                </View>

            </View>
            </View>
          
            </View>
    </View>
   
        {/* BOTOES CANCELAR E SALVAR */}

            <View style ={styles.botoes}>

                <View style = {styles.cancelAdd}>

                <View style={styles.cancelar}>
                 <TouchableOpacity onPress={() => navigation.navigate("Navigation")}
                 style={styles.botao1} >
                 <Feather name="x"  size={30} color='#6F8AB7'/>
                 </TouchableOpacity>
                 <Text style={styles.texto}>Cancelar</Text>
                </View>

                <View style={styles.salvar}>
                 <TouchableOpacity style={styles.botao2}>
                    <Feather name="check" size={30} color='#6F8AB7'/>
                 </TouchableOpacity>
                 <Text style={styles.texto}>Salvar</Text>
                </View>

                </View>

            </View>
    
        

            </View>
        </ScrollView>
            
        </View>
    )
}

export default Novogrupo