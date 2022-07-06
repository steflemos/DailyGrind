import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "../../styles/classificacao";
import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons'


const Classificacao = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>

        <View style ={styles.viewBtn}>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate("Navigation")}>
                    <Ionicons name="arrow-back-circle-sharp"  size={45} color='#fff'/>
        </TouchableOpacity>

        </View>
        <Text style={styles.titulo}>Ranking</Text>
        </View>

            <View style={styles.main}>
                <Text style={styles.tituloClassificacao}>Classificação</Text>
                <View style={styles.containerLista}>

                    <View style={styles.grupoList}>
                        
                        <Text style={styles.textTarefa}>stef_fodona</Text>

                        <View style ={styles.pontosRec}>
                        <FontAwesome name="diamond" size={20} color = '#615D6C'/>
                        <Text style = {styles.Pontos}>100XP</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default Classificacao