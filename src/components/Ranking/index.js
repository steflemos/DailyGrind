import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/ranking";
import {FontAwesome} from '@expo/vector-icons'


const Ranking = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Ranking</Text>
                <View style={styles.containerLista}>
                    <View style={styles.containerGrupoTitle}>
                        <Text style={styles.grupoTitle}>Grupos</Text>
                    </View>
                    <View style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Grupo da Igreja</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Ranking