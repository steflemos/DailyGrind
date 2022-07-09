import React from "react";
import { View, Image,Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";



const Conquistas = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
            </TouchableOpacity>
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Conquistas</Text>
                <View style={styles.containerLista}>
                <ScrollView>
                    <View style={styles.icon}>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </View>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/deadpool.png')} />
                        </View>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/coringa.png')} />
                        </View>
                    </View>
                </ScrollView>
                </View>
            </View>   
        </View>
    )
}

export default Conquistas