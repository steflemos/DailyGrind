import React, {useState} from "react";
import {View, Text, TouchableOpacity, Modal, TextInput} from "react-native"
import {MaterialIcons, Feather,FontAwesome, Ionicons} from "@expo/vector-icons"
import styles from "./styles";

const Taskitem = (props) => {
    const [modalAberto, setModalAberto] = useState(false);
    return(
        
    <View style ={{  alignItems:"center", flexDirection:'column'}}>
        <Modal visible={modalAberto} transparent={true}>
                    <View style={styles.containerModal2}>
                        <View styles={styles.aaa}>
                        <View style={styles.viewbtnFechar}>
                            <View style={{fontWeight:"bold", color:"#fff", marginLeft:10}}>DailyGrind:</View>
                            <TouchableOpacity style={styles.btnFechar}>
                                <Text style={styles.x}>X</Text>
                            </TouchableOpacity>
                        </View>
                        
                         <View style={styles.viewText}><Text style={styles.textExcluir}>Você deseja excluir a tarefa ?</Text></View>
                         </View>
                        <View style={styles.posicionarView}>
                        <View style={styles.viewFantasma}></View>
                            <View style={styles.viewBtnModal}>
                                <TouchableOpacity style={styles.btnExitModal2} onPress={() => setModalAberto(false)}>
                                    <Text style={styles.textBtnModal}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnExitModal2} onPress={() => props.deleteTask()}>
                                    <Text style={styles.textBtnModal}>Ok!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>


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
                <TouchableOpacity onPress={() => setModalAberto(true)}>
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