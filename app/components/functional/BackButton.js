import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { abs } from 'react-native-reanimated';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function BackButton(props) {
    return (
        <TouchableOpacity style={styles.backContainer}
            onPress={() => {
                props.onPressNav()
            }}
        >
            {/* <Image style={styles.arrow} source={arrowIcon} /> */}
            <FontAwesomeIcon style={styles.arrow} icon={faChevronRight} size={25} color={'white'} />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backContainer: {
        zIndex: 99,
        top: 20,
        left: 24,
        flexDirection: "row"
    },
    backText: {
        color: 'white',
        fontSize: 16,
        top: 2,
        left: 10
    },
    arrow: {
        height: 25,
        width: 25,
        transform: [{ rotate: '180deg' }]
    },
})
