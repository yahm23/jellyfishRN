import React, {useState} from 'react'
import {Text, View, StyleSheet} from 'react-native';
import Child from './Child';

export default function Offers() {
    const [state, setstate] = useState('initialState')
    
    

    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Offers// Testing</Text>
           <Child text={state} setstate={setstate}/>
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