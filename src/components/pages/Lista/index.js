import React, { useEffect, useState } from "react";
import {
    ScrollView, View, Image, Text, TouchableOpacity, Modal, TextInput, DrawerLayoutAndroidBase, Keyboard
} from "react-native";
import styles from "./styles";
import ItemLista from "./ItemLista"
import ItemListaModal from "./ItemListaModal"
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'


const Lista = ({ navigation }) => {
    const [modalAberto, setModalAberto] = useState(false);
    const [tarefa, setTarefa] = useState([])
    const getTarefaById = async idSelecionado => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        }
        try {
            await fetch('http://localhost:3000/tarefa/' + idSelecionado, requestOptions)
            setTarefa(tarefa.filter(tarefa => tarefa.id != idSelecionado))
        } catch (error) {
            console.error(error)
            setTarefa([])
        }
        tarefa.map((dados) => {
        return (
            <Modal visible={modalAberto} transparent={true}>

                <ScrollView style={styles.containerModal}>
                    <View style={styles.modalContent}>
                    
                        <View style={{
                            flexFlow: "end",
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            width: "100%",
                        }}
                        key={dados.idtarefa}>
                        <ItemListaModal tarefa={dados.nome} data_tarefa={dados.data_tarefa}
                            descricao={dados.descricao} prioridade={dados.prioridade}>
                        </ItemListaModal>
                        </View>
                    </View>
                </ScrollView>
            </Modal>
        )})
        const [modalAberto, setModalAberto] = useState(false);
        setModalAberto(true);
    }
    const getTarefa = async () => {
        try {
            const response = await fetch('http://localhost:3000/tarefa')
            const dados = response.json()
            dados.then(
                (val) => setTarefa(val)
            )
        } catch (error) {
            console.error(error)
            setTarefa([]) 
        }
    }
    useEffect(() => {
        getTarefa()
    }, [])

    const addTarefa = () => {
        console.log("add tarefa dentro de addtarefa");
        getTarefa()
        Keyboard.dismiss()
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../../styles/assets/levels.png')} />
            </View>

            <View style={styles.main}>
                <Text style={styles.titulo}>Lista de Tarefas</Text>
                <View style={styles.containerLista}>
                    {
                        tarefa.map((dados) => {
                            return (
                                <View style={styles.tarefaCriada} key={dados.idtarefa}>
                                    {/* <TouchableOpacity onPress={() => setModalAberto(true)}>
                                    <ItemLista tarefa={dados.nome}>
                                    </ItemLista>
                                </TouchableOpacity> */}
                                    <TouchableOpacity onPress={()=>getTarefaById(dados.idtarefa)}>
                                        <ItemLista tarefa={dados.nome}>
                                        </ItemLista>
                                    </TouchableOpacity>


                                    
                            </View>
                            )
                        })
                    }
                </View>
            </View>

            <View style={styles.viewBtn}>
                <TouchableOpacity addTarefa={addTarefa} onPress={() => navigation.navigate("New")}
                    style={styles.btnAdd}>
                    <MaterialIcons name="add" size={35} color='black' />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Lista