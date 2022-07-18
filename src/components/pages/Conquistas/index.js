import React, { useEffect, useState } from "react";
import { View, Image,Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from "./styles";
import { UsuarioLogado } from "../Login";


export const ImagemConta = [];
const Conquistas = ({navigation}) => {
    const [viewImagem, setViewImagem] = useState('none')
    const [viewImagem2, setViewImagem2] = useState('none')
    const [viewImagem3, setViewImagem3] = useState('none')
    const [viewImagem4, setViewImagem4] = useState('none')
    const [viewImagem5, setViewImagem5] = useState('none')
    const [viewImagem6, setViewImagem6] = useState('none')
    const [viewImagem7, setViewImagem7 ]= useState('none')
    const [viewImagem8, setViewImagem8 ]= useState('none')
    const [viewImagem9, setViewImagem9 ]= useState('none')
    let xpUsuario = UsuarioLogado[0].pontos_recompensa;
    const [xpUsuarioDisplay, setXpUsuarioDisplay] = useState(xpUsuario)
    // let [viewImagem, viewImagem2, viewImagem3, viewImagem4, viewImagem5, viewImagem6, viewImagem7, viewImagem8, viewImagem9] = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
    const showConquistas = async() => {
        xpUsuario = UsuarioLogado[0].pontos_recompensa;
        console.log(xpUsuario);
        setXpUsuarioDisplay(xpUsuario);
        if (xpUsuario >= 15 && xpUsuario < 75){
            setViewImagem("flex");
            ImagemConta.push(require('../../../styles/assets/spiderman.png'));
        }
        else if(xpUsuario >= 75 && xpUsuario < 150){
            setViewImagem("flex")           
            setViewImagem2("flex")
            ImagemConta.push(require('../../../styles/assets/ww.png'));
        }
        else if(xpUsuario >= 150 && xpUsuario < 300){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            ImagemConta.push(require('../../../styles/assets/ferro.png'));
        }
        else if(xpUsuario >= 300 && xpUsuario < 400){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            ImagemConta.push(require('../../../styles/assets/thor.png'));
        }
        else if(xpUsuario >= 400 && xpUsuario < 500){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            ImagemConta.push(require('../../../styles/assets/groot.png'));
        }
        else if(xpUsuario >= 500 && xpUsuario < 600){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            ImagemConta.push(require('../../../styles/assets/catwoman.png'));
        }
        else if(xpUsuario >= 600 && xpUsuario < 700){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            setViewImagem7("flex")
            ImagemConta.push(require('../../../styles/assets/superhero.png'));
        }
        else if(xpUsuario >= 700 && xpUsuario < 800){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            setViewImagem7("flex")
            setViewImagem8("flex")
            ImagemConta.push(require('../../../styles/assets/batman.png'));
        }
        else if(xpUsuario >= 800){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            setViewImagem7("flex")
            setViewImagem8("flex")
            setViewImagem9("flex")
            ImagemConta.push(require('../../../styles/assets/superman.png'));
        }
    else{
        }
    }  

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // The screen is focused
          showConquistas()
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
            <Text style={styles.titulo}>Conquistas</Text>
            {/* <Text style={styles.numerosHeader}>3/3</Text> */}
            <View style={{flexDirection:"column",marginRight:'7%'}}>
            <View style ={styles.viewUp}>
            <Image style={styles.up} source={require('../../../styles/assets/up.png')} />
            </View>
            <View style ={styles.viewXP}>
            <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
            <Text style={styles.levels} >{UsuarioLogado[0].pontos_recompensa}</Text>
            <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
            </View>
            <View style ={styles.viewUp}>
            <Image style={styles.up} source={require('../../../styles/assets/retangulo.png')} />
            </View>
            </View>
            </View>
              
            <View style={styles.main}>
                
                <View style={styles.containerLista}>
                <ScrollView contentContainerStyle={styles.iconList} style={styles.iconListOutside}>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/spiderman.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem2}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/ww.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem3}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/ferro.png')} />
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem4}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/thor.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem5}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/groot.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem6}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/catwoman.png')} />
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={[styles.iconBox, {display: viewImagem7}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/superhero.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem8}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </View>
                        <View style={[styles.iconBox, {display: viewImagem9}]}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/superman.png')} />
                        </View>
                    </View>
                </ScrollView>
                </View>
            </View>   
        </View>
    )
}

export default Conquistas;