import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import {MaterialIcons, Feather,FontAwesome} from "@expo/vector-icons"
import {styles} from "./styles";
import { StyleSheet } from "react-native";

const Taskitem = (props) => {
    return(
    <View style ={{  alignItems:"center", flexDirection:'column'}}>
        <View style ={{backgroundColor:'#E2E2E2',width:'90%', marginTop:20,borderRadius:10,
         shadowOffset:{
            width:1,
            height:3,
            },
            shadowRadius:5,
            shadowColor:'#bfbfbf',}}>
            <View style={{
                display:"flex",
                  alignItems:"center",
                  marginTop:20,
                  marginBottom:20,
                  height:'100%'
                }}>

            <View style = {{flexDirection:'row', alignContent:'space-between',width:'90%',}}>
                <View style ={{
                     backgroundColor:'#AED0FF',
                     height:50,
                     width:'80%',
                     borderRadius:7,
                }}>
                    <Text style={{color:'#253858',fontWeight:"bold",fontSize:15,marginLeft:10}}>Nome da Tarefa</Text>
                <Text style = {{fontSize:17, marginLeft:10}}>{props.task}</Text>
                </View >

                <View style ={{
                     height:50,
                     width:'20%',
                     borderRadius:7,
                     alignItems:'center',
                     justifyContent:'center'
                }}>
                    <TouchableOpacity onPress={() => props.updateTaskHandle()}>
                    <Feather name="edit" size={25} color ='#000'/>
                </TouchableOpacity>
                
                </View>
            </View>

            <View style = {{flexDirection:'row', alignContent:'space-between',width:'90%',}}>
                <View style ={{
                     backgroundColor:'#AED0FF',
                     width:'80%',
                     height:50,
                     borderRadius:7,
                     marginTop:14
                }}>
                    <Text  style={{color:'#253858',fontWeight:"bold",fontSize:15,marginLeft:10}}>Pontos de Recompensa</Text>

                     <View style ={{flexDirection:'row',}} >
                    <View style={{marginRight:10}}>
                     <Text style = {{fontSize:17, marginLeft:10}}> {props.xp}</Text>
                     </View>
                     <View style={{alignItems:'center',justifyContent:'center',}}>
                     <FontAwesome name="diamond" size={15} color ='#000'/>
                     </View>
                     </View>
                </View>

                <View style ={{
                     height:44,
                     width:'20%',
                     borderRadius:7,
                     marginTop:14,
                     alignItems:'center',
                     justifyContent:'center'
                }}>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete-forever" size={30} color ='#e34242'/>
                </TouchableOpacity>
                </View>
                
             </View>  
            </View>
        </View>
    </View>
    )
}
export default Taskitem