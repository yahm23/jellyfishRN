import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faChartNetwork, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { StatusBar, StyleSheet } from 'react-native';
import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

StatusBar.setBarStyle('light-content', true);

const MainTabs = createBottomTabNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <FontAwesomeIcon size={22} icon={faChartPie} color={tintColor} key={'icon_1'} />
            }
        },
        Appliances: {
            screen: Appliances,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <FontAwesomeIcon size={22} icon={faProjectDiagram} color={tintColor} key={'icon_2'} />
            }
        },
        Reports: {
            screen: Reports,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <FontAwesomeIcon size={22} icon={faChartLine} color={tintColor} key={'icon_3'} />
            }
        },
        Offers: {
            screen: Offers,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => <FontAwesomeIcon size={22} icon={faPoundSign} color={tintColor} key={'icon_4'} />
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: ({tintColor }) => <FontAwesomeIcon size={22} icon={faUserAstronaut} color={tintColor} key={'icon_5'} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#F70B5E'
        }
    }
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        borderTopWidth: 0
    }
})

export default createAppContainer(MainTabs);
