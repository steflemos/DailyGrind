import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function New(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Mais Opcoes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#6F8AB7'
    },

    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})