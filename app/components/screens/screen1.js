import React from 'react'
import {View, Text} from 'react-native'

export default function Screen1() {
    return (
        <View 
            style={{justifyContent: 'center', //Centered vertically
            alignItems: 'center', // Centered horizontally
            flex:1}}
        >
            <Text>
                Screen1 bitch
            </Text>
        </View>
    )
}
