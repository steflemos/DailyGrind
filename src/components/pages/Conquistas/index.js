import React from "react";
import { View, Image,Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from "./styles";



const Conquistas = ({navigation}) => {
    let [viewImagem, viewImagem2, viewImagem3, viewImagem4, viewImagem5, viewImagem6, viewImagem7, viewImagem8, viewImagem9] = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
    console.log(viewImagem9);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
            </TouchableOpacity>
                {/* <Text style={styles.numerosHeader}>3/3</Text> */}
                <Image style={styles.levels} source={require('../../../styles/assets/levels.png')} />
            </View>
              
            <View style={styles.main}>
                <Text style={styles.titulo}>Conquistas</Text>
                <View style={styles.containerLista}>
                <ScrollView contentContainerStyle={styles.iconList} style={styles.iconListOutside}>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem2}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/deadpool.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem3}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/coringa.png')} />
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem4}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem5}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/deadpool.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem6}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/coringa.png')} />
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem7}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem8}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/deadpool.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem9}]}>
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