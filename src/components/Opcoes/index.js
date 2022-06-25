import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/opcoes.js";
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
                <Text style={styles.titulo}>Opcões</Text>
                <View style={styles.containerLista}>
                    
                    <View style={styles.grupoList}>
                        <TouchableOpacity
                   onPress={() => navigation.navigate("Conta")}>
                        <Text style={styles.textTarefa}>Conta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Notificações</Text>
                    </View>
                    <View style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Ajuda</Text>
                    </View>
                    <View style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Sobre</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Opcoes;