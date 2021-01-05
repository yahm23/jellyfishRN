import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Child(props) {
    return (
        <View>
            <Text style={styles.paragraph}>parent's data is {props.text}</Text>
            <Button onPress={()=>{props.setstate('changed')}} title="Clcik to update"></Button>
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