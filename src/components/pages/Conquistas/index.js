import React, { useEffect, useState } from "react";
import { View, Image,Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import styles from "./styles";
import { UsuarioLogado } from "../Login";


// export const ImagemConta = [];
const Conquistas = ({navigation}) => {
    const [modalAberto1, setModalAberto1] = useState(false)
    const [modalAberto2, setModalAberto2] = useState(false)
    const [modalAberto3, setModalAberto3] = useState(false)
    const [modalAberto4, setModalAberto4] = useState(false)
    const [modalAberto5, setModalAberto5] = useState(false)
    const [modalAberto6, setModalAberto6] = useState(false)
    const [modalAberto7, setModalAberto7] = useState(false)
    const [modalAberto8, setModalAberto8] = useState(false)
    const [modalAberto9, setModalAberto9] = useState(false)
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
            // ImagemConta.push(require('../../../styles/assets/spiderman.png'));
        }
        else if(xpUsuario >= 75 && xpUsuario < 150){
            setViewImagem("flex")           
            setViewImagem2("flex")
            // ImagemConta.push(require('../../../styles/assets/ww.png'));
        }
        else if(xpUsuario >= 150 && xpUsuario < 300){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            // ImagemConta.push(require('../../../styles/assets/ferro.png'));
        }
        else if(xpUsuario >= 300 && xpUsuario < 400){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            // ImagemConta.push(require('../../../styles/assets/thor.png'));
        }
        else if(xpUsuario >= 400 && xpUsuario < 500){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            // ImagemConta.push(require('../../../styles/assets/groot.png'));
        }
        else if(xpUsuario >= 500 && xpUsuario < 600){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            // ImagemConta.push(require('../../../styles/assets/catwoman.png'));
        }
        else if(xpUsuario >= 600 && xpUsuario < 700){
            setViewImagem("flex")           
            setViewImagem2("flex")
            setViewImagem3("flex")
            setViewImagem4("flex")
            setViewImagem5("flex")
            setViewImagem6("flex")
            setViewImagem7("flex")
            // ImagemConta.push(require('../../../styles/assets/superhero.png'));
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
            // ImagemConta.push(require('../../../styles/assets/batman.png'));
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
            // ImagemConta.push(require('../../../styles/assets/superman.png'));
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
            <Modal visible={modalAberto1} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/spiderman.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Homem-Aranha </Text>
                        <Text style={styles.textoHeroi}>Com grandes poderes vêm grandes responsabilidades, parabéns pela sua primeira conquista!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto1(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto2} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/ww.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Mulher Maravilha </Text>
                        <Text style={styles.textoHeroi}>A guerreira amazona! Continue assim!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto2(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto3} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/ferro.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Homem de Ferro </Text>
                        <Text style={styles.textoHeroi}>Infelizmente, nem todos nascem ricos como o Tony Stark. Continue a sua jornada!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto3(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto4} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/thor.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Thor </Text>
                        <Text style={styles.textoHeroi}>O filho de Odin! Que a honra e a força dele esteja com você!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto4(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto5} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/groot.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Groot </Text>
                        <Text style={styles.textoHeroi}>I am Groot. Continue o trabalho!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto5(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto6} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/catwoman.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Mulher-Gato </Text>
                        <Text style={styles.textoHeroi}>A vida não foi fácil para Selina Kyle, e nem será para você. Continue em frente!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto6(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto7} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/superhero.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Pantera Negra </Text>
                        <Text style={styles.textoHeroi}>Príncipe T'Challa! Se continuar assim, você vai longe!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto7(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto8} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Batman </Text>
                        <Text style={styles.textoHeroi}>O homem-morcego nos ensinou que não importa quanto dinheiro você tenha, sempre há motivo para ficar preocupado! Mantenha a humildade, campeão.</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto8(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={modalAberto9} transparent={true} animationType='slide'>
                <View style={styles.modalHeroi}>
                    <View style={styles.boxImgHeroi}>
                        <Image style={styles.imgIcon} source={require('../../../styles/assets/superman.png')} />
                    </View>
                    <View style={styles.boxHeroi}>
                        <Text style={styles.tituloHeroi}> Super-Homem </Text>
                        <Text style={styles.textoHeroi}>Parabéns!!!! Você conquistou tudo!!! Super!!</Text>
                    </View>
                    <TouchableOpacity style={styles.btnHeroi} onPress={() => setModalAberto9(false)}><Text>Fechar</Text>  </TouchableOpacity>
                </View>
            </Modal>
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
            <Text style={styles.levels} >{xpUsuarioDisplay}</Text>
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
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem}]} onPress={() => setModalAberto1(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/spiderman.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem2}]} onPress={() => setModalAberto2(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/ww.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem3}]}onPress={() => setModalAberto3(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/ferro.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem4}]} onPress={() => setModalAberto4(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/thor.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem5}]} onPress={() => setModalAberto5(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/groot.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem6}]} onPress={() => setModalAberto6(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/catwoman.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem7}]} onPress={() => setModalAberto7(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/superhero.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem8}]} onPress={() => setModalAberto8(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/batman.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconBox, {display: viewImagem9}]} onPress={() => setModalAberto9(true)}>
                            <Image style={styles.imgIcon} source={require('../../../styles/assets/superman.png')} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </View>   
        </View>
    )
}

export default Conquistas;