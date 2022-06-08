import React from "react";
import { View, Image,Text, } from "react-native";
import styles from "../../styles/conquistas";



const Conquistas = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
              
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
            <View style={styles.form}></View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Conquistas</Text>
                
            </View>
    
        </View>
    )
}

export default Conquistas