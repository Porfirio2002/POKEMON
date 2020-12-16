import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import estilo from './estilo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Tab1} from '../Tab1'
import {Tab2} from '../Tab2'
<<<<<<< HEAD
import pokeapi from '../../api/pokemon'
=======
import {Tab3} from '../Tab3';
>>>>>>> 1e90f2c (upupupup)


const Tab = createBottomTabNavigator();
  
const Inicio = () => {
return (
    
      <Tab.Navigator>
<<<<<<< HEAD
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
=======
        <Tab.Screen name="Pokedex" component={Tab1} />
        <Tab.Screen name="Historia" component={Tab2} />
        <Tab.Screen name="Pokemon go" component={Tab3} />
>>>>>>> 1e90f2c (upupupup)
      </Tab.Navigator>
  
  );
}

               

export default Inicio