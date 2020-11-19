import React from 'react';
import { Text, View } from 'react-native';
import NavigatorStack from './navigator'
import NavigationService from "./navigation-service";

export default function App() {
    
    return (
        <View>
            
            <NavigatorStack
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
                />
        </View>
    )
}
