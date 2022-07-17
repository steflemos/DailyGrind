import React, {useState} from "react";
import {View, Text, TouchableOpacity, Modal, TextInput} from "react-native"
import {MaterialIcons, Feather,FontAwesome, Ionicons} from "@expo/vector-icons"
import styles from "./styles";

const Taskitem = (props) => {
    const [modalAberto, setModalAberto] = useState(false);
    return(
        
    <View style={{alignItems:"center", flexDirection:'column'}}>
        <Modal visible={modalAberto} transparent={true}>
                    <View style={styles.containerModal2}>
                        <View styles={styles.aaa}>
                        <View style={styles.viewbtnFechar}>
                            <View style={{fontWeight:"bold", color:"#fff", marginLeft:10}}><Text>Confirmação</Text></View>
                            <TouchableOpacity style={styles.btnFechar} onPress={() => setModalAberto(false)}>
                                <Text style={styles.x}>X</Text>
                            </TouchableOpacity>
                        </View>
                        
                         <View style={styles.viewText}><Text style={styles.textExcluir}>Você deseja excluir a tarefa ?</Text></View>
                         </View>
                        <View style={styles.posicionarView}>
                        <View style={styles.viewFantasma}></View>
                            <View style={styles.viewBtnModal}>
                                <TouchableOpacity style={styles.btnExitModal2} onPress={() => props.deleteTask()}>
                                    <Text style={styles.textBtnModal}>Ok!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>


     <View style ={{backgroundColor:'#E2E2E2',width:'90%', marginTop:10,borderRadius:10,marginBottom:10,
         shadowOffset:{
            width:1,
            height:3,
            },
            shadowRadius:5,
            shadowColor:'#bfbfbf',}}>
            <View style={{
                display:"flex",
                flexDirection:'row',
                  marginBottom:20,
                  height:'100%'
                }}>

            <View style = {{flexDirection:'column ', alignContent:'space-around',width:'80%',}}>
                <View style ={{
                     backgroundColor:'#AED0FF',
                     height:50,
                     width:'90%',
                     borderRadius:7,
                     marginBottom:15,
                     marginLeft:10,
                     marginTop:20,
                }}>
                    <Text style={{color:'#253858',fontWeight:"bold",fontSize:15,marginLeft:10}}>Nome da Tarefa</Text>
                <Text style = {{fontSize:17, marginLeft:10}}>{props.task}</Text>
                </View >
                <View style ={{
                     backgroundColor:'#AED0FF',
                     width:'90%',
                     height:50,
                     borderRadius:7,
                     marginLeft:10
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
             </View> 

               <View style={{alignItems:'center',justifyContent:'center', }}>
            <View style = {{flexDirection:'column', alignContent:'space-between',width:'20%',height:'90%',marginLeft:20}}>

                <View style ={{height:'33%', alignItems:'center',justifyContent:'center',}}>
                <TouchableOpacity onPress={() => props.taskDone()}>
                    <FontAwesome name="check-square-o" size={27} color ='#0dad0a'/>
                </TouchableOpacity>
                </View>

                <View style ={{height:'33%', alignItems:'center',justifyContent:'center',}}>
                    <TouchableOpacity onPress={() => props.updateTaskHandle()}>
                    <Feather name="edit" size={25} color ='#000'/>
                </TouchableOpacity>
                
                </View>

                

                <View  style ={{height:'33%', alignItems:'center',justifyContent:'center',}}>
                <TouchableOpacity onPress={() => setModalAberto(true)}>
                    <MaterialIcons name="delete-forever" size={30} color ='#e34242'/>
                </TouchableOpacity>
                </View>

               
            </View>
            </View>
                
           
              
            </View>
        </View>
      
    </View>
    )
}
export default Taskitem