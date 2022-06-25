import React from "react";
import{View, Image,Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/intro'


const Intro = ({navigation}) => {
    return (
      <View style={styles.container}>
          <View style={styles.viewIntro}>
              <Text style={styles.titleIntro}>
                 Bem vindo(a)!
              </Text>
          </View>

          <View  style={styles.mainIntro}>
        <Image style={styles.imagemIntro} source={require('../../styles/assets/img.png')}/>
        </View>

        <View style={styles.textIntro}>
            <Text style={styles.textIntro}>
            No DailyGrind, a cada tarefa que você conclui, pontos de expêriencia são ganhos. Conquistas são desbloqueadas ao longo da sua jornada no app.
            </Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')} 
        style={styles.btnComeçar}>
            <Text style={styles.TextComeçar}>Começar!</Text>
            </TouchableOpacity>     
        </View>
        
    )
  }
  
  export default Intro