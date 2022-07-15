import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import {styles} from "./styles";

const Taskitem = (props) => {
    return(
        <View>
            <View style={StyleSheet.containerInputs}>
                <Text>{props.task}</Text>
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