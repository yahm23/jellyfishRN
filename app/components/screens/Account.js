import React from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Account() {

    const LogOut = () => {
        AsyncStorage.setItem('LoggedIn', "false", () => {
            console.log('Set to false');
        });
    }

    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Account</Text>
            <TouchableOpacity style ={
                    {alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 80,
                    width: '92%',
                    borderRadius: 10,
                    backgroundColor: "#F70B5E"}}
                    title='Get Started' onPress={()=>LogOut()}>
                    <Text>Log Out</Text>
            </TouchableOpacity>
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