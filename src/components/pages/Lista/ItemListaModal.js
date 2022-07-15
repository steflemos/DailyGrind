import react, { useState } from "react"
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native"
import {TextInput} from 'react-native-paper'
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
            <View style ={styles.ViewTask}>
        <View style ={styles.viewInput}>
            <View style ={{backgroundColor:'#c2c2c2',
            height:'100%'
        }}>
            <TextInput 
            multiline={true}
                style = {styles.inputAdd}
                value={descricao}
                placeholder="Escreva uma tarefa"
                onChangeText={handleDescricaoChange}
            />
            </View>
           
       <View>
            <TextInput
             
                value={xp}
                style = {styles.inputAdd}
                placeholder="XP"
                type="number"
                onChangeText={handleXpChange}
            />
         </View>
             </View>
             <View style = {styles.btnAdd}>
             <TouchableOpacity onPress={postTask}>
                <MaterialIcons name="add" size={30} />
            </TouchableOpacity>
            </View>
           
            </View>
        </KeyboardAvoidingView>
    )
}
export default Taskinputfield
