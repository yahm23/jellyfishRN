import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartLine, faChartPie, faPoundSign, faUserAstronaut, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardStack, AppliancesStack, ReportsStack, OffersStack, AccountStack} from './components/functional/StackExporter'
import NetInfo from "@react-native-community/netinfo";

StatusBar.setBarStyle('light-content', true);


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
