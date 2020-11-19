import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5Pro";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { Transition } from 'react-native-reanimated';

// import LoginScreen from './components/screens/Login'
import Screen1 from './components/screens/screen1'
import Screen2 from './components/screens/screen2'
import Screen3 from './components/screens/screen3'
import Screen4 from './components/screens/screen4'
import Screen5 from './components/screens/screen5'
import Login from './components/screens/Login';

export default function Navigator(){
    return (
        <>
            isSignedIn ? (
            <>
            <Stack.Screen name="Home" component={Screen1} />
            <Stack.Screen name="Profile" component={Screen2} />
            <Stack.Screen name="Settings" component={Screen3} />
            <Stack.Screen name="Settings2" component={Screen4} />
            <Stack.Screen name="Settings3" component={Screen5} />
            </>
            ) : (
            <>
            <Stack.Screen name="SignIn" component={Login} />
            
            </>
            )
        </>
    )

}
