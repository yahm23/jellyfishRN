import React, {useState,useRef} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Child(props) {
    const [index, setIndex] = useState(0)


    const handleInc = ()=>{
        var x = index +1;
        setIndex(x)
        props.setTouchedBar(index +1)
    }

    
    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Parent's data is {props.touchedBar}</Text>
            <Button onPress={()=>{handleInc()}} title="Click to Inc"></Button>
            {/* <Button onPress={()=>{handleDec()}} title="Click to Dec"></Button> */}
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