import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Image } from 'react-native';

export default function PieChart() {

    return (
        <View style={styles.searchBarContainer}>
            <Text style={styles.paragraph}>Pie</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A',
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})