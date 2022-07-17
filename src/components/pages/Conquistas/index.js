import React, { useEffect, useState } from "react";
import { View, Image,Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from "./styles";
import { UsuarioLogado } from "../Login";



const Conquistas = ({navigation}) => {
    let xpUsuario = UsuarioLogado[0].pontos_recompensa;
    let [viewImagem, viewImagem2, viewImagem3, viewImagem4, viewImagem5, viewImagem6, viewImagem7, viewImagem8, viewImagem9] = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
    const showConquistas = async() => {
        xpUsuario = UsuarioLogado[0].pontos_recompensa;
        console.log(xpUsuario);
        if (xpUsuario >= 15 && xpUsuario < 75){
            viewImagem= "flex";
        }
        else if(xpUsuario >= 75 && xpUsuario < 150){
            viewImagem= "flex";
            viewImagem2= "flex";
        }
        else if(xpUsuario >= 150 && xpUsuario < 300){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
        }
        else if(xpUsuario >= 300 && xpUsuario < 400){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
        }
        else if(xpUsuario >= 400 && xpUsuario < 500){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
            viewImagem5= "flex";
        }
        else if(xpUsuario >= 500 && xpUsuario < 600){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
            viewImagem5= "flex";
            viewImagem6= "flex";
        }
        else if(xpUsuario >= 600 && xpUsuario < 700){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
            viewImagem5= "flex";
            viewImagem6= "flex";
            viewImagem7= "flex";
        }
        else if(xpUsuario >= 700 && xpUsuario < 800){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
            viewImagem5= "flex";
            viewImagem6= "flex";
            viewImagem7= "flex";
            viewImagem8= "flex";
        }
        else if(xpUsuario >= 800){
            viewImagem= "flex";
            viewImagem2= "flex";
            viewImagem3= "flex";
            viewImagem4= "flex";
            viewImagem5= "flex";
            viewImagem6= "flex";
            viewImagem7= "flex";
            viewImagem8= "flex";
            viewImagem9= "flex";
        }
    else{
        }
        return xpUsuario;
    }    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showConquistas()
          // The screen is focused
          // Call any action and update data
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
            </TouchableOpacity>
                {/* <Text style={styles.numerosHeader}>3/3</Text> */}
                <Text style={styles.levels} value={showConquistas()}></Text>
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