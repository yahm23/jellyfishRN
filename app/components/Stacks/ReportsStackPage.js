import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';
import BackButton from '../functional/BackButton';

export default function ReportsStackPage({ navigation, route }) {
    const data = route.params.data;
    
    return (
        <View style={styles.body}>
            <BackButton onPressNav={()=>navigation.navigate('Reports')}/>

            <View style={styles.contentContainer}>

                <Text>HELLO</Text>
            </View>

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
    },
    
    contentContainer: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: 46,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    centerBox: {
        marginBottom: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})