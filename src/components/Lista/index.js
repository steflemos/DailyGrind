import React from "react";
import { View, Image } from "react-native";
import styles from "../../styles/lista";



const Lista = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
            <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
        </View>
    )
}

export default Lista