import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/ranking";
import {FontAwesome,MaterialIcons} from '@expo/vector-icons'


const Ranking = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
            </TouchableOpacity>
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Ranking</Text>
                <View style={styles.containerLista}>
                    <Text style={styles.grupoTitle}>Grupos</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Classificacao")}
                    style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Grupo da Igreja</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewBtn}>
                <TouchableOpacity onPress={() => navigation.navigate("Novogrupo")} 
                style={styles.btnAdd}>
                   <MaterialIcons name="add"  size={35} color='black'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Ranking