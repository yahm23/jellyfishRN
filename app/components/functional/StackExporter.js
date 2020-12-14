    import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../screens/Dashboard';
import Appliances from '../screens/Appliances';
// import Reports from '../screens/Reports';
import Reports from '../screens/Reports';
import Offers from '../screens/Offers';
import Account from '../screens/Account';
import AppliancesStackPage from '../stacks/AppliancesStackPage';
import ReportsStackPage from '../stacks/Reports/ReportsStackPage';

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

module.exports = {
    DashboardStack,
    AppliancesStack,
    ReportsStack,
    OffersStack,
    AccountStack
}