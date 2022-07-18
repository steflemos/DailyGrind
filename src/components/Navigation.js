import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Lista from './pages/Lista';
// import Ranking from './pages/Ranking';
import Conquistas from './pages/Conquistas';
import Opcoes from './pages/Opcoes';
import Conta from './pages/Conta'


import {Entypo,FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

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
            <Tab.Screen name="Home" component={Lista}
            options={{
                tabBarIcon:({size,color})=>(
                    <Entypo name= "home" size={size} color={color}/>
                )
            }}
            />

            {/* <Tab.Screen name="Ranking" component={Ranking}
            options={{
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="podium-gold"size={size} color={color}/>
                )
            }}
            /> */}

            <Tab.Screen name="Conquistas" component={Conquistas}
             options={{
                tabBarIcon:({size,color})=>(
                    <MaterialCommunityIcons name="star-check" size={size} color={color} />
                )
            }}
            />

<Tab.Screen name="Conta" component={Conta}
            options={{
                tabBarIcon:({size,color})=>(
                    <FontAwesome5 name="user-circle"size={size} color={color}/>
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