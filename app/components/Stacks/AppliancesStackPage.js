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
            <BackButton onPressNav={()=>navigation.navigate('Appliances')}/>
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