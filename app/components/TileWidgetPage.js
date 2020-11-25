import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DynamicPieChart from './DynamicPieChart';
import arrowIcon from '../images/Tab_navigation_icons/right-arrow.png';
import brain from './brain';

export default function TileWidgetPage({ navigation, route }) {

    const data = route.params.data;
    const key = Object.keys(data);
    
    pieDataArr = key.map(key => {
        return { name: data[key], addedValue: data[key].energy_consumption }
    })

    return (
        <View style={styles.body}>
            <TouchableOpacity style={styles.backContainer} onPress={() => {
                navigation.navigate('Appliances')
            }}>
                <Image style={styles.arrow} source={arrowIcon} />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.header}>{route.params.name}</Text>
            <View style={styles.centerBox}>
                <DynamicPieChart pieData={pieDataArr} />
            </View>
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
        marginTop: 20,
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    centerBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})