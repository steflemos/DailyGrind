import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard, TextInput, Modal, TouchableOpacity, Image, StyleSheet, DrawerLayoutAndroidBase} from "react-native"
import Taskinputfield from "./ItemListaModal"
import Taskitem from "./ItemLista"
import styles from "./styles"
import {MaterialIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { KeyboardAvoidingView } from "react-native";
import UpdateItem from "./UpdateItem";

const App = () => {
  const[modalAberto, setModalAberto] = useState(false)
  const [tasks, setTasks] = useState([])
  const addTask = () => {
    getTasks()
    Keyboard.dismiss()
  }
  const deleteTask = async (deleteid) => {
    const requestOptions = {
      method: 'delete',
      headers: {'Content-type': 'application/json'}
    }
    try{
      await fetch('http://localhost:3000/tarefa/' + deleteid, requestOptions)
      setTasks(tasks.filter(task => task.id != deleteid))
      getTasks()
    } catch(error){
      console.log("Erro: " + error)
      setTasks([])
    }
  }
  const getTaskById = async idSelecionado => {
     setModalAberto(true);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
    }
    try {
        const response = await fetch('http://localhost:3000/tarefa/' + idSelecionado, requestOptions)
        const dataById = response.json()
        dataById.then(
            (val) => setTasks(val)
        )
        tasks.filter((idDesejado) => {return idSelecionado == idDesejado.idtarefa})
    } catch (error) {
        console.error(error)
        setTasks([])
    }
}

  const getTasks =  async () => {
    try{
      const response = await fetch('http://localhost:3000/tarefa')
      const data = response.json()
      data.then(
        (val) => setTasks(val)
      )
    } catch(error){
      console.log('Erro: ' + error)
      setTasks([])
    }
    setModalAberto(false)
}
  

  useEffect (() => {
    getTasks()
  }, [])
  


  return (
    
    <View style={styles.container}>
    <View style={styles.header}>

        <Image style={styles.controleIndex} source={require('../../../styles/assets/controle.png')} />

        {/* <Text style={styles.numerosHeader}>3/3</Text> */}
        <Image style={styles.levels} source={require('../../../styles/assets/levels.png')} />
    </View>
    <View style={styles.main}>
        <Text style={styles.titulo}>Tarefas</Text>
        <View style={styles.containerLista}>
            <ScrollView style= {{ width:'100%'}}>
              
            <Modal visible={modalAberto} transparent={true}>
                  <View style={styles.containerModal}>
                      <View style={StyleSheet.modalContent}>
                          <View style={{
                              flexFlow: "end",
                              justifyContent:'space-between',
                              flexDirection:'row',
                              width: "100%",
                          }}>

                              <TouchableOpacity style={styles.btnExitModal} onPress={() => setModalAberto(false)}>
                                  <Ionicons name='close-circle' size={50} color='white'></Ionicons>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.btnExitModal} onPress={() => getTasks()}>
                                  <Ionicons name='checkmark-circle' size={50} color='white'></Ionicons>
                              </TouchableOpacity>
                          </View>
                        {
                          tasks.map(dataById => {
                            return(
                              <View key={dataById.idtarefa}>
                                <UpdateItem id={dataById.idtarefa}></UpdateItem>
                              </View>
                            )
                          })
                        }
                  </View>
                </View>              
              </Modal>
              <View>
                <ScrollView>
                  {
                    tasks.map(data => {
                      return(
                        <View key={data.idtarefa}>
                          <Taskitem
                          task = {data.descricao}
                          xp= {data.pontos_recompensa}
                          deleteTask={() => deleteTask(data.idtarefa)}
                          updateTaskHandle={() => getTaskById(data.idtarefa)}
                          />
                        </View>
                      )
                    })
                  }
                  
                </ScrollView>
                
              </View>
          </ScrollView>

        </View>
        <View style={styles.containerLista2}>
                <Taskinputfield addTask={addTask} />
                </View>

      </View>
      <View>
        
      </View>
    </View>
  )
}
export default App