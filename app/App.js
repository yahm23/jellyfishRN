import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import NavigatorStack from './navigator'
import NavigationService from "./navigation-service";
import { AsyncStorage } from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    // useEffect(async () => {
    //     try {
    //         await AsyncStorage.setItem(
    //           'LoggedIn',
    //           'false'
    //         );
    //     }
    //     catch (error) {
    //         console.log(error);
    //     // Error saving data
    //     }
        
    // }, [input])
    return (

        <NavigationContainer>
            <View>
                
                <NavigatorStack/>
            </View>
        </NavigationContainer>
    )
}
