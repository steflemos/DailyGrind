import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Navigation from './Navigation'
import Intro from './src/components/Intro';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import New from './src/components/New/';

const Routes = () =>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}} name="Começar" component={Intro}/>
          <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
          <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro}/>
          <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation}/>
          <Stack.Screen options={{headerShown: false}} name="New" component={New}/>

          </Stack.Navigator>
        </NavigationContainer>
      );
}



export default Routes;