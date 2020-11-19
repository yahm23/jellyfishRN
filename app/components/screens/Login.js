import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from '../../images/full.png';
import { AsyncStorage } from '@react-native-community/async-storage';

export default function Login() {

    return (
        <View style={styles.body}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Understand your</Text>
                <Text style={styles.header}>home energy</Text>
            </View>
            <Text style={styles.paragraph}>
                Real-time, simple trend insights.
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} title='Get Started'>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.paragraph}>Need to order your Jellyfish kit?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A',
    },
    logo: {
        marginTop: 120,
        height: 50,
        width: 'auto',
        resizeMode: 'contain',
    },
    headerContainer: {
        marginTop: 120
    },
    header: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 20,
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        height: 80,
        width: '100%',
        marginBottom: 100
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: '92%',
        borderRadius: 10,
        backgroundColor: "#F70B5E"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})