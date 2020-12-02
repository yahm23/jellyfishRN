import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DynamicPieChart from '../DynamicPieChart';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';
import BackButton from '../functional/BackButton';

export default function AppliancesStackPage({ navigation, route }) {

    const data = route.params.data;
    const key = Object.keys(data);

    pieDataArr = key.map(key => {
        return { name: key, value: data[key].energy_consumption }
    })

    return (
        <View style={styles.body}>
            <View style={styles.topBox}>
                <BackButton onPressNav={() => navigation.navigate('Appliances')} />
                <Text style={styles.header}>{route.params.name}</Text>
            </View>
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
    topBox: {
        height: 180
    },
    backContainer: {
        marginTop: 20,
        flexDirection: "row",
        zIndex: 99
    },
    contentContainer: {
        width: '100%',
        height: '100%'
    },
    header: {
        color: 'white',
        marginTop: 120,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    centerBox: {
        flex: 1
    }
})