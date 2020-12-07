import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DynamicPieChart from '../DynamicPieChart';
import BackButton from '../functional/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/pro-light-svg-icons';

export default function AppliancesStackPage({ navigation, route }) {

    const data = route.params.data;
    const key = Object.keys(data);

    pieDataArr = key.map(key => {
        return { name: key, value: data[key].energy_consumption }
    })

    return (
        <View style={styles.body}>
            <BackButton onPressNav={()=>navigation.navigate('Appliances')}/>
            <FontAwesomeIcon icon={faCog} size={30} color={'white'} style={styles.addIcon} />
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
        marginTop: 54,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    centerBox: {
        flex: 1
    },
    addIcon: {
        position: 'absolute',
        right: 20,
        top: 20
    }
})