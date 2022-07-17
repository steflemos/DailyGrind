import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Keyboard, TextInput, Modal, TouchableOpacity, Image, StyleSheet, DrawerLayoutAndroidBase} from "react-native"
import Taskinputfield from "./ItemListaModal"
import Taskitem from "./ItemLista"
import styles from "./styles"
import {MaterialIcons, FontAwesome, Ionicons} from '@expo/vector-icons'
import { KeyboardAvoidingView } from "react-native";
import UpdateItem from "./UpdateItem";
import { UsuarioLogado } from "../Login";

const App = () => {
  const[modalAberto, setModalAberto] = useState(false)
  const [tasks, setTasks] = useState([])
  const [usuario, setUsuario] = ([]);
  let xpUsuario = UsuarioLogado[0].pontos_recompensa
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

  const updateUsuario = async () => {
    try {
        const requestOptions = {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                apelido: UsuarioLogado[0].apelido,
                email: UsuarioLogado[0].email,
                pontos_recompensa: UsuarioLogado[0].pontos_recompensa,
                senha: UsuarioLogado[0].senha
            })
        }
        const response = await fetch('http://localhost:3000/usuario/' + UsuarioLogado[0].idusuario, requestOptions)
        const data = response.json()
        data.then(
          (val) => setUsuario(val)
        )
    } catch (error) {
        console.log('Erro:' + error)
    }

}
  const taskDone = async (deleteid, xptarefa) => {
    const requestOptions = {
      method: 'delete',
      headers: {'Content-type': 'application/json'}
    }
    try{
      await fetch('http://localhost:3000/tarefa/' + deleteid, requestOptions)
      setTasks(tasks.filter(task => task.id != deleteid))
      UsuarioLogado[0].pontos_recompensa = xpUsuario + xptarefa;
      updateUsuario()
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
        <Text style={styles.titulo}>Tarefas</Text>
        {/* <Text style={styles.numerosHeader}>3/3</Text> */}
      <View style={{flexDirection:"column",marginRight:'7%'}}>
        <View style ={styles.viewUp}>
          <Image style={styles.up} source={require('../../../styles/assets/up.png')} />
        </View>
        <View style ={styles.viewXP}>
       <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
        <Text style={styles.levels} >XP {UsuarioLogado[0].pontos_recompensa}</Text>
        <Image style={styles.stars} source={require('../../../styles/assets/stars.png')}/>
        </View>
        <View style ={styles.viewUp}>
          <Image style={styles.up} source={require('../../../styles/assets/retangulo.png')} />
        </View>
     </View>
    </View>
    <View style={styles.main}>
       
        <View style={styles.containerLista}>
            <ScrollView style= {{ width:'100%'}}>
              
            <Modal visible={modalAberto} transparent={true} animationType='slide' style={{}}>
            <View style={styles.containerModal}>
                      <View style={StyleSheet.modalContent}>
                          <View style={{flexDirection:'row', width: "100%",justifyContent:'space-between',}}>
                          <View></View>
                          <Text style={styles.titulo2}>Editar Tarefa</Text>

                              <TouchableOpacity style={styles.btnExitModal} onPress={() => getTasks()}>
                                  <Ionicons name='close-circle' size={50} color='#4A4848'></Ionicons>
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
                          taskDone={() => taskDone(data.idtarefa, data.pontos_recompensa)}
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