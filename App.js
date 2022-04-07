import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home';
import History from './src/screens/History';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator activeColor="blue" barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={24} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="history" color={color} size={24} />
            ),
          }}
          name="History"
          component={History}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
