import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faChartNetwork, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';
import { createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
    {
        Dashboard: {
            screen: Dashboard,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon icon={faChartPie} key={'icon_1'}/>
            }
        },
        Appliances: {
            screen: Appliances,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon icon={faProjectDiagram} key={'icon_2'}/>
            }
        },
        Reports: {
            screen: Reports,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon icon={faChartLine} key={'icon_3'}/>
            }
        },
        Offers: {
            screen: Offers,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon icon={faPoundSign} key={'icon_4'}/>
            }
        },
        Account: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: () => <FontAwesomeIcon icon={faUserAstronaut} key={'icon_5'}/>
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