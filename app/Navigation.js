import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { StatusBar, StyleSheet } from 'react-native';
import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';
import TileWidgetPage from './components/TileWidget';
import brain from './components/brain';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

StatusBar.setBarStyle('light-content', true);

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#F70B5E'
                }}>
                <Tab.Screen name='Dashboard' component={Dashboard} options={{
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartPie} color={color} key={'icon_1'} />
                }} />
                <Tab.Screen name='Appliances' component={Appliances} options={{
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faProjectDiagram} color={color} key={'icon_2'} />
                }} />
                <Tab.Screen name='Reports' component={Reports} options={{
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartLine} color={color} key={'icon_3'} />
                }} />
                <Tab.Screen name='Offers' component={Offers} options={{
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faPoundSign} color={color} key={'icon_4'} />
                }} />
                <Tab.Screen name='faUserAstronaut' component={Account} options={{
                    tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faUserAstronaut} color={color} key={'icon_5'} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}