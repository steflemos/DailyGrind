import React from "react";
import { View, Image,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/conta.js";
import {FontAwesome, Ionicons} from '@expo/vector-icons'


const Opcoes = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style ={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Navigation")}>
                        <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.main}>
               
                <View style={styles.containerLista}>
                    <View style={styles.viewInputs}>
                    
                <View style={styles.nick}>
                    <View style={styles.view}>
                        <View style={styles.viewNick}>
                        <Text style={styles.textTarefa}>Nick</Text>
                        <Text>Stef_Fodona</Text>
                        </View>
                        <TouchableOpacity style={styles.btnAlterarNick}><Text>Editar Nick</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.email}>
                        <Text style={styles.textTarefa}>Email</Text>
                    </View>
                    
                    <View style={styles.senha}>
                        <Text style={styles.textTarefa}>Senha</Text>
                    </View>

                    <View style={styles.deletar}>
                        <TouchableOpacity><Text style={styles.textTarefa}>Deletar</Text></TouchableOpacity>
                    </View>
                    </View>

                </View>
            </View>
        </View>
        
    )
}

export default Opcoes;