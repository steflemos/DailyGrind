import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
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
                    
                <TouchableOpacity onPress={() => navigation.navigate("Conta")}style={styles.nick}>
                        <Text style={styles.textTarefa}>Conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Notificacoes")}style={styles.email}>
                        <Text style={styles.textTarefa}>Notificações</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Ajuda")}style={styles.senha}>
                        <Text style={styles.textTarefa}>Ajuda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Sobre")}style={styles.deletar}>
                        <Text style={styles.textTarefa}>Sobre</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Opcoes;