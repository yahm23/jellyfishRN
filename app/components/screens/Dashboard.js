import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import logo from '../../images/Jellyfish-white.png';

export default function Dashboard() {

    return (
        <View style={styles.body}>
            <Image source={logo} style={styles.logo} />
            {/* <Text style={styles.paragraph}>Dashboard</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    logo: {
        marginTop: 80,
        height: 40,
        width: 'auto',
        resizeMode: 'contain',
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})