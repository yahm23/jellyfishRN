import React from 'react'
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

export default function Dashboard(props) {

    const LogOut = async () => {
        // props.setLoading(true)
        try {
            await AsyncStorage.setItem('LoggedIn', "false")
            console.log('setting to false');
            RNRestart.Restart();
            
        } catch (e) {
            // props.setLoading(false)
            console.log(e);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Dashboard</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style ={
                    {alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 80,
                    width: '92%',
                    borderRadius: 10,
                    backgroundColor: "#F70B5E"}}
                    title='Get Started' onPress={()=>LogOut()}>
                    <Text >Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})