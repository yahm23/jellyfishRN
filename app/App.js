import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/Login';
import Dashboard from './components/screens/Dashboard';
import Appliances from './components/screens/Appliances';
import Reports from './components/screens/Reports';
import Offers from './components/screens/Offers';
import Account from './components/screens/Account';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './components/Login';
import Spinner from 'react-native-loading-spinner-overlay';

const Tab = createBottomTabNavigator();

export default function App() {
    const[signedIn,setSigned]=useState();
    const[loading,setLoading]=useState(false);

    useEffect(() => {
        async function getLoggedData(){
            const value = await AsyncStorage.getItem('LoggedIn')
            if(value !== null) {
                console.log(value);
                setSigned(value)
            }
        }

        getLoggedData();
    }, [signedIn])

    return (
        <NavigationContainer>
            <View>
                <Spinner
                visible={loading}
                // textContent={'Loading...'}
                // textStyle={styles.spinnerTextStyle}
                />
            </View>

            {signedIn==="true"?
            
            <Tab.Navigator>
                <Tab.Screen setLoading={setLoading} name="Dashboard" component={Dashboard} />
                <Tab.Screen name="Appliances" component={Appliances} />
                <Tab.Screen name="Reports" component={Reports} />
                <Tab.Screen name="Offers" component={Offers} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
            :
            <Login setLoading={setLoading}></Login>
            }
        </NavigationContainer>
    )
}
