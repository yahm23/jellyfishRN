import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native';
import JellyLogo from '../../images/Jellyfish-white.png'

export default function Appliances() {

    return (
        <View style={styles.body}>
            <Image source={JellyLogo}/>
            <Text style={styles.paragraph}>Appliances</Text>
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