import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { abs } from 'react-native-reanimated';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';


export default function BackButton(props) {
    return (
        <View style={styles.body}>
            <TouchableOpacity style={styles.backContainer} 
            onPress={() => {
                props.onPressNav()
            }}
            >
                <Image style={styles.arrow} source={arrowIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        position:"absolute",
        zIndex:4,
        top:0,
        height: '10%',
        backgroundColor: '#1A1A1A',
    },
    backContainer: {
        marginTop: 20,
        flexDirection: "row",
        zIndex: 99
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
