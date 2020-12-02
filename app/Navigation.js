import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { StatusBar, View, StyleSheet } from 'react-native';
import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';
import AppliancesStackPage from './components/stacks/AppliancesStackPage';
import ReportsStackPage from './components/stacks/Reports/ReportsStackPage';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

StatusBar.setBarStyle('light-content', true);
const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {/* Change back to dashboard */}
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}
const AppliancesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Appliances" component={Appliances} />
            <Stack.Screen name="AppliancesStackPage" component={AppliancesStackPage} />
        </Stack.Navigator>
    )
}
const ReportsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="ReportsStackPage" component={ReportsStackPage} />
        </Stack.Navigator>
    )
}
const OffersStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Offers" component={Offers} />
        </Stack.Navigator>
    )
}
const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function AppContainer() {
    return (
        <View style={styles.body}>
            <View style={styles.statusBarBackground}></View>
            <StatusBar backgroundColor="#1A1A1A"  />
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#F70B5E',
                        style: {
                            backgroundColor: '#141414',
                            borderTopColor: '#141414',
                            height: (Platform.OS === 'ios') ? 85 : 60,
                            padding: (Platform.OS === 'ios') ? 10 : 0,
                            paddingBottom: (Platform.OS === 'ios') ? 30 : 7,
                        }
                    }}>
                    <Tab.Screen name='Dashboard' component={DashboardStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartPie} color={color} key={'icon_1'} />
                    }} />
                    <Tab.Screen name='Appliances' component={AppliancesStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faProjectDiagram} color={color} key={'icon_2'} />
                    }} />
                    <Tab.Screen name='Reports' component={ReportsStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faChartLine} color={color} key={'icon_3'} />
                    }} />
                    <Tab.Screen name='Offers' component={OffersStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faPoundSign} color={color} key={'icon_4'} />
                    }} />
                    <Tab.Screen name='Account' component={AccountStack} options={{
                        tabBarIcon: ({ color, size }) => <FontAwesomeIcon size={size} icon={faUserAstronaut} color={color} key={'icon_5'} />
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
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
