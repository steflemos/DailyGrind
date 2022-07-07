import React, {useState} from "react";
import { View,Text, TouchableOpacity, TextInput, Plataform } from "react-native";
import styles from "../../styles/new";
import {FontAwesome, Feather} from '@expo/vector-icons'





const New = ({navigation}) => {
    
    const [data, setData] = useState(new Date(1598051730000))
    const [exibirCalendario, setExibirCalendario] = useState(false)
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(selectedDate);
    };
    const showDatePicker = () => {
        setShow(true)
    }


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
            </View>
            <View style={styles.main}>
            <View style={styles.inputs}>
                <TextInput placeholder="Nome da tarefa" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
                <TextInput placeholder="Descrição" style={styles.name} multiline={true}  placeholderTextColor="#615d6c"/>
                 <View>
                    <View>

                    </View>
                 </View>
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
            <View style={styles.botoes}>
            <View style ={styles.cancelAdd}>
            <View style={styles.cancelar}>
                 <TouchableOpacity onPress={() => navigation.navigate("Navigation")}
                 style={styles.botaoCancelar} >
                 <Feather name="x"  size={30} color='#6F8AB7'/>
                 </TouchableOpacity>
                 <Text style={styles.textoCancelar}>Cancelar</Text>
                 </View>
                 <View style={styles.salvar}>
                 <TouchableOpacity style={styles.botaoSalvar}>
                    <Feather name="check" size={30} color='#6F8AB7'/>
                 </TouchableOpacity>
                 <Text style={styles.textoCancelar}>Salvar</Text>
                </View>
            </View>
            </View>
            </View>
    )
}

export default New