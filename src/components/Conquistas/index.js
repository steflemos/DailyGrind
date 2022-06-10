import React from "react";
import { View, Image,Text, } from "react-native";
import styles from "../../styles/conquistas";



const Conquistas = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.controleIndex} source={require('../../styles/assets/controle.png')} />
                <Text style={styles.numerosHeader}>3/3</Text>
                <Image style={styles.levels} source={require('../../styles/assets/levels.png')} />
            </View>
            <View style={styles.main}>
                <Text style={styles.titulo}>Conquistas</Text>
                <View style={styles.containerLista}>
                    <View style={styles.icon}>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../styles/assets/batman.png')} />
                        </View>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../styles/assets/deadpool.png')} />
                        </View>
                        <View style={styles.iconBox}>
                            <Image style={styles.imgIcon} source={require('../../styles/assets/coringa.png')} />
                        </View>
                    </View>
                </View>
            </View>   
        </View>
    )
}

export default Conquistas