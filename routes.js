import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Navigation from './Navigation'
import Intro from './src/components/Intro';


import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import New from './src/components/New/';

// IMPORTACAO DA PAGINA "OPÇOES"
import Conta from './src/components/Conta';
import Notificacoes from './src/components/Notificacoes/index.';
import Sobre from './src/components/Sobre';
import Ajuda from './src/components/Ajuda';

import Lista from './src/components/Lista';

const Routes = () =>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}} name="Começar" component={Intro}/>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
          <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro}/>
          
          {/* TAB NAVIGATION */}
          <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation}/>

          <Stack.Screen options={{headerShown: false}} name="New" component={New}/>

          {/* navegacao da pagina "Opções" */}

          <Stack.Screen options={{headerShown: false}} name="Conta" component={Conta}/>
          <Stack.Screen options={{headerShown: false}} name="Sobre" component={Sobre}/>
          <Stack.Screen options={{headerShown: false}} name="Notificacoes" component={Notificacoes}/>
          <Stack.Screen options={{headerShown: false}} name="Ajuda" component={Ajuda}/>
          
          
          <Stack.Screen options={{headerShown: false}} name="Lista" component={Lista}/>
        

       

          </Stack.Navigator>
        </NavigationContainer>
      );
}



export default Routes;