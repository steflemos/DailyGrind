import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard, Modal, TouchableOpacity, Image, StyleSheet} from "react-native"
import Taskinputfield from "./ItemListaModal"
import {TextInput} from 'react-native-paper'
import Taskitem from "./ItemLista"
import styles from "./styles"
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
        <KeyboardAvoidingView>
            
            <TextInput
                value={descricao}
                placeholder="Escreva uma tarefa"
                onChangeText={handleDescricaoChange}
            />
            <TextInput
                value={xp}
                placeholder="XP"
                onChangeText={handleXpChange}
            />
            <TouchableOpacity onPress={postTask}>
                <MaterialIcons name="add" size={24} />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}
export default UpdateItem
