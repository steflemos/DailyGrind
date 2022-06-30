import React from "react";
import { View, Image,Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../../styles/conta.js";
import {FontAwesome} from '@expo/vector-icons'


const Opcoes = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
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
                        <TouchableOpacity style={styles.btnAlterarNick}>Editar Nick</TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.email}>
                        <Text style={styles.textTarefa}>Notificações</Text>
                    </View>
                    
                    <View style={styles.senha}>
                        <Text style={styles.textTarefa}>Ajuda</Text>
                    </View>

                    <View style={styles.deletar}>
                        <Text style={styles.textTarefa}>Sobre</Text>
                    </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Opcoes;