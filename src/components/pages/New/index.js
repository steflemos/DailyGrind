import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import styles from "./styles";
import { FontAwesome,  Feather } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';

const New = ({navigation} ) => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const onChange = (event, selectedDate) => {
        console.log('----->>>Data: ' + date)
        setDate(selectedDate);
        setShow(false)
    };
    const showDatepicker = () => {
        setShow(true)
    }
    const handleNomeChange = nome => setNome(nome)
    const handleDescricaoChange = descricao => setDescricao(descricao)
    const handleDataChange = data => setData(data)
    const handlePrioridadeChange = prioridade => setPrioridade(prioridade)
    const postTarefa = async () => {
        if(nome != ""){
            
            try{
                const requestOptions = {
                    method: 'post',
                    headers: {'Content-Type': 'application/json '},
                    body: JSON.stringify({
                        nome: nome,
                        descricao: descricao,
                        data_tarefa: "11-02-2002",
                        prioridade: prioridade
                    })
                }
                await fetch ('http://localhost:3000/tarefa', requestOptions)
                
                
                

            }catch(error){
                console.log("erro" + error);
                setNome('')

            }
            navigation.navigate("Navigation")
            navigation.navigate("Lista")
        }else{
            console.log("erro campos vazios");
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
                <Text style={styles.titulo}>Nova Tarefa</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.inputs}>
                    <TextInput placeholder="Nome da tarefa" style={styles.name} multiline={true} value={nome} onChangeText={handleNomeChange} placeholderTextColor="#615d6c" />
                    <TextInput placeholder="Descrição" style={styles.name} multiline={true} value={descricao}onChangeText={handleDescricaoChange} placeholderTextColor="#615d6c" />
                    <View style={styles.viewDateTime}>
                        <TextInput style={styles.inputDataAparecer} placeholder="Data Selecionada:"value={data} onChangeText={handleDataChange} placeholderTextColor="#615d6c" ></TextInput>
                         <TouchableOpacity  style={styles.inputDate} onPress={showDatepicker}><Text style={styles.textSelecionar}>Selecione a Data</Text></TouchableOpacity>
                    </View>
                        {show && (
                            <DateTimePicker
                                testID="DateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                display="default"
                                onChange={onChange} />

                        )}
                    
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
                            <FontAwesome style={styles.diamont} name='diamond' size={20} color='#615d6c' />
                            <TextInput style={styles.pontos} value={prioridade} onChangeText={handlePrioridadeChange}/>
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
                 <TouchableOpacity onPress={postTarefa} style={styles.botaoSalvar}>
                    <Feather name="check" size={30} color='#6F8AB7'/>
                 </TouchableOpacity>
                 <Text style={styles.textoCancelar}>Salvar</Text>
                </View>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default New