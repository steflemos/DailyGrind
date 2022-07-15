import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from "./styles";
import { StyleSheet } from "react-native";

const Taskitem = (props) => {
    return(
        <View>
            <View style={StyleSheet.containerInputs}>
                <View style ={{
                     backgroundColor:'#c2c2c2',
                     width:'80%',
                     height:50,
                }}>
                <Text style = {{fontSize:20}}>{props.task}</Text>
                </View>
                <Text>{props.xp}</Text>

                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.updateTaskHandle()}>
                    <MaterialIcons name="edit"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Taskitem