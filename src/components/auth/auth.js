import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './Login';
import Cadastro from './Cadastro';

const Auth = () =>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
          <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro}/>
          
          </Stack.Navigator>
        </NavigationContainer>
      );
}



export default Auth;