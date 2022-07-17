import react, { useState } from "react"
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native"
 import {TextInput} from 'react-native-paper'
import { MaterialIcons,FontAwesome} from "@expo/vector-icons"
import styles from "./styles"

const Taskinputfield = (props) => {
    const [descricao, setDescricao] = useState('')
    const [xp, setXp] = useState('')
    const handleDescricaoChange = descricao => setDescricao(descricao)
    const handleXpChange = xp => setXp(xp)
    const postTask = async () => {
        if (descricao != "" && xp != "") {
            try {
                const requestOptions = {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        descricao: descricao,
                        pontos_recompensa: xp
                    })
                }
                await fetch('http://localhost:3000/tarefa/', requestOptions)
                props.addTask()
            } catch (error) {
                console.log('Erro:' + error)
                setDescricao('')
                setXp('')
            }
        } else {
            
        }


    }
    return (
        <KeyboardAvoidingView style ={styles.ViewAddTask}>
        <View style ={styles.ContainerInputs}>

    <View style ={styles.ViewInputTextAdd}>

            <View >
                <TextInput style ={styles.InputTask}
                multiline={true}
                activeUnderlineColor="#615D6C"
                underlineColor="#615D6C"
                value={descricao}
                label="Escreva uma tarefa"
                onChangeText={handleDescricaoChange}
                />
            </View>

        <View >
            <TextInput style ={styles.InputTask}
                value={xp}
                label="XP"
                placeholder="Pontos de Recompensa"
                type="number"
                left={<TextInput.Icon name="diamond" size ={20} color = "#615D6C"/>}
                activeUnderlineColor="#615D6C"
                underlineColor="#615D6C"
                onChangeText={handleXpChange}
                />
        </View>
     </View>

        <View style ={styles.Viewbotao}>
            <View style ={styles.viewBotaoAdd}>
             <TouchableOpacity onPress={postTask}>
                <MaterialIcons name="add" size={30} />
            </TouchableOpacity>
            </View>
        </View>

    </View>
 </KeyboardAvoidingView>
    )
}
export default Taskinputfield
