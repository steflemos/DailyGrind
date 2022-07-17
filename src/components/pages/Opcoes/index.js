import React from "react";
import { View, Image,Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import {FontAwesome} from '@expo/vector-icons'


const Opcoes = ({navigation}) => {
    
    return(
        <View style={styles.container}>
           <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.navigate("Lista")} style ={styles.btnControle}>
                        <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Opções</Text>
                    {/* <Text style={styles.numerosHeader}>3/3</Text> */}
                    <View style={{flexDirection:"column",marginRight:'7%'}}>
                    <View style ={styles.viewUp}>
                    <Image style={styles.up} source={require('../../../styles/assets/up.png')} />
                    </View>
                    <View style ={styles.viewXP}>
                    <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
                    <Text style={styles.levels} >XP </Text>
                    <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
                    </View>
                    <View style ={styles.viewUp}>
                    <Image style={styles.up} source={require('../../../styles/assets/retangulo.png')} />
                    </View>
                    </View>
                    </View>
            <View style={styles.main}>
                <View style={styles.containerLista}>
                    
                {/* <TouchableOpacity onPress={() => navigation.navigate("Conta")}style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Conta</Text>
                    </TouchableOpacity> */}
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Ajuda")}style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Ajuda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Sobre")}style={styles.grupoList}>
                        <Text style={styles.textTarefa}>Sobre</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Opcoes;