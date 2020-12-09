import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingScreen from '../LoadingScreen';

export default function Account({ navigation }) {

    const [isLoading, setIsLoading] = useState(false);

    const LogOut = () => {
        setIsLoading(true);
        AsyncStorage.setItem('LoggedIn', "false", () => {
            setTimeout(() => {
                navigation.navigate('Login');
                setIsLoading(false);
            }, 1000);
        });
    }

    return (
        <View>
            {isLoading ?
                <LoadingScreen /> :
                <View style={styles.body}>
                    <Text style={styles.paragraph}>Account</Text>
                    <TouchableOpacity style={styles.logoutButton}
                        title='Get Started' onPress={() => LogOut()}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            }
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
    },
    logoutButton: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '92%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F70B5E'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})