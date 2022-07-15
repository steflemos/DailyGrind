import react, { useState } from "react"
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
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
export default Taskinputfield
