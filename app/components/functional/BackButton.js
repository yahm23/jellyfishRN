import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { abs } from 'react-native-reanimated';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';


export default function BackButton(props) {
    return (
            <TouchableOpacity style={styles.backContainer} 
            onPress={() => {
                props.onPressNav()
            }}
            >
                <Image style={styles.arrow} source={arrowIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backContainer: {
        height: '10%',
        zIndex: 99,
        marginTop: 20,
        flexDirection: "row"
    },
    backText: {
        color: 'white',
        fontSize: 16,
        top: 2,
        left: 10
    },
    arrow: {
        marginLeft: 25,
        height: 25,
        width: 25,
        transform: [{ rotate: '180deg' }]
    },
})
