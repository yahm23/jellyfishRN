import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';

export default function AppliancesStackPage({ navigation, route }) {

    return (
        <View style={styles.body}>
            <TouchableOpacity style={styles.backContainer} onPress={() => {
                navigation.navigate('Reports')
            }}>
                <Image style={styles.arrow} source={arrowIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
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
    contentContainer: {
        width: '100%',
        height: '100%'
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