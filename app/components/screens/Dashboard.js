import React from 'react'
import {Text, View,TouchableOpacity, StyleSheet} from 'react-native';

export default function Dashboard(props) {

    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Dashboard</Text>
            <View style={styles.buttonContainer}></View>
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