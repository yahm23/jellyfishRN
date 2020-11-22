import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faChartNetwork, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'react-native';
import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';
import { createAppContainer } from 'react-navigation';

StatusBar.setBarStyle('light-content', true);

const TabNavigator = createBottomTabNavigator(
    
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon size={25} icon={faChartPie} key={'icon_1'}/>
            }
        },
        Appliances: {
            screen: Appliances,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon size={25} icon={faProjectDiagram} key={'icon_2'}/>
            }
        },
        Reports: {
            screen: Reports,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon size={25} icon={faChartLine} key={'icon_3'}/>
            }
        },
        Offers: {
            screen: Offers,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon size={25} icon={faPoundSign} key={'icon_4'}/>
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon size={25} icon={faUserAstronaut} key={'icon_5'}/>
            }
        },
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
)

export default createAppContainer(TabNavigator);
