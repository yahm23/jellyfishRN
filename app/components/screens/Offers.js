import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default function Offers() {

    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Offers</Text>
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