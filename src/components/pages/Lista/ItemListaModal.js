import React, {useState} from "react";
import { View, Image,Text, TouchableOpacity, Modal, TextInput, ScrollView
 } from "react-native";
import styles from "../New/styles";
import {FontAwesome,MaterialIcons, Ionicons, Feather} from '@expo/vector-icons'


const ItemListaModal = (props) =>{
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
    const [descricao, setDescricao] = useState('')
    const handleDescricaoTarefaChange = descricaoTarefa => setDescricao(descricao)
    
    return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Editar Tarefa</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.inputs}>
                        <Text style={styles.name} multiline={true}> {props.tarefa}</Text>
                        <TextInput
                        onChangeText={handleDescricaoTarefaChange}
                        value={descricao}
                        style={styles.name} multiline={true}/>
                        <View style={styles.viewDateTime}>
                            <Text style={styles.inputDataAparecer} >{props.data_tarefa}</Text>
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
                                <Text style={styles.pontos}>{props.prioridade}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.botoes}>
                <View style ={styles.cancelAdd}>
                <View style={styles.cancelar}>
                    <TouchableOpacity onPress={() => setModalAberto(false)}
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
                </ScrollView>
            </View>
    )
}


export default ItemListaModal;