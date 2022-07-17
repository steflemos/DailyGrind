import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard, Modal, TouchableOpacity, Image, StyleSheet} from "react-native"
import Taskinputfield from "./ItemListaModal"
import {TextInput} from 'react-native-paper'
import Taskitem from "./ItemLista"
import styles from "./styleUpdateTask"
import {MaterialIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { KeyboardAvoidingView } from "react-native";


const UpdateItem = (props) => {
    const [descricao, setDescricao] = useState('')
    const [xp, setXp] = useState('')
    const id = props.id
    console.log("olha ai bicho" + id);
    const handleDescricaoChange = descricao => setDescricao(descricao)
    const handleXpChange = xp => setXp(xp)
    const postTask = async () => {
        if (descricao != "" && xp != "") {
            const requestOptions = {
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    descricao: descricao,
                    pontos_recompensa: xp
                })
              }
            try{
                const response = await fetch('http://localhost:3000/tarefa/' + id, requestOptions)
                const data = response.json()
                console.log(data);
                data.then(
                  (val) => setTasks(val)
                )
            } catch (error) {
                console.log('Erro:' + error)
                setDescricao('')
                setXp('')
            }
        } else {
            
        }


    }
    return (
        <KeyboardAvoidingView style ={styles.container}>
            
            <TextInput
                value={descricao}
                onChangeText={handleDescricaoChange}
                label="Nome da Tarefa"
                style={styles.input}
                type="text"
                activeUnderlineColor="#B8B8B8"
                underlineColor="#B8B8B8"
            />
            <TextInput
                value={xp}
                onChangeText={handleXpChange}
                placeholder="Pontos de Recompensa"
                label="XP"
                style={styles.inputXP}
                type="text"
                left={<TextInput.Icon name="diamond" color = "#615D6C" />}
                activeUnderlineColor="#B8B8B8"
                underlineColor="#B8B8B8"
            />

            <TouchableOpacity onPress={postTask} style ={styles.btnSalvar}>
            <Text style ={styles.textSalvar}>SALVAR</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}
export default UpdateItem
