import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InternetConnection() {
    return (
        <View style = {styles.body}>
            <Text style={styles.text}>Please connect to the internet.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent:'center'
    },
    text:{
        width: '100%',
        color:'white',
        fontSize: 16,
        textAlign: 'center',
    }
})
