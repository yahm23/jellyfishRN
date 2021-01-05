import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAnalytics, faChartPie, faPoundSign, faUserAstronaut, faChartNetwork } from '@fortawesome/pro-duotone-svg-icons';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardStack, AppliancesStack, ReportsStack, OffersStack, AccountStack } from './components/functional/StackExporter';
import NetInfo from "@react-native-community/netinfo";
import InternetConnection from './components/screens/InternetConnection';

StatusBar.setBarStyle('light-content', true);

const Tab = createBottomTabNavigator();

export default function AppContainer() {
    const [connected, setConnection] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState('false');

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setConnection(state.isConnected)
        });
        return () => { unsubscribe() }
    }, [connected])


    return (
        <View style={styles.body}>
            <View style={styles.statusBarBackground}></View>
            <StatusBar backgroundColor="#1A1A1A" />

            { connected ?
                <Tab.Navigator
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#f82a72',
                        inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
                        style: {
                            backgroundColor: '#141414',
                            borderTopColor: '#141414',
                            height: (Platform.OS === 'ios') ? 85 : 60,
                            padding: (Platform.OS === 'ios') ? 5 : 0,
                            paddingBottom: (Platform.OS === 'ios') ? 30 : 7
                        }
                    }}>
                    <Tab.Screen name='Dashboard' component={DashboardStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartPie} color={color} key={'icon_1'} />
                    }} />
                    <Tab.Screen name='Appliances' component={AppliancesStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartNetwork} color={color} key={'icon_2'} />
                    }} />
                    <Tab.Screen name='Reports' component={ReportsStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faAnalytics} color={color} key={'icon_3'} />
                    }} />
                    <Tab.Screen name='Offers' component={OffersStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faPoundSign} color={color} key={'icon_4'} />
                    }} />
                    <Tab.Screen name='Account' component={AccountStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faUserAstronaut} color={color} key={'icon_5'} />
                    }} />
                </Tab.Navigator>
                : <InternetConnection />}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%'
    },
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 46 : 0,
        backgroundColor: "#1A1A1A",
    }
})
