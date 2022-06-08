import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Lista from './src/components/Lista/index'
import Ranking from './src/components/Ranking/index'
import Conquistas from './src/components/Conquistas/index';
import Opcoes from './src/components/Opcoes'


import {Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle: {
                backgroundColor: '#615D6C',
                paddingBottom: 5,
                paddingTop: 5,
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: '#ACEDFF',
            tabBarInactiveTintColor: '#fff'
            }}
        >
            <Tab.Screen name="Lista" component={Lista}
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name= "add-to-list" size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen name="Ranking" component={Ranking}
            options={{
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="podium-gold"size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen name="Conquistas" component={Conquistas}
             options={{
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="star-check" size={size} color={color} />
                )
            }}
            />
       
            <Tab.Screen name="Mais opções" component={Opcoes}
             options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name="menu"size={size} color={color}/>
                )
            }}
            />
       
           

        </Tab.Navigator>

    )
    }