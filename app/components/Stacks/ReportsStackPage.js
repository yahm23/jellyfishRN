import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import BackButton from '../functional/BackButton';
// import {LineChart} from "react-native-chart-kit";
import { LineChart, Grid, XAxis } from 'react-native-svg-charts'

export default function ReportsStackPage({ navigation, route }) {
    const month = route.params.month;

    const days = route.params.days;
    const energyArray = days.map(day=>{
        return day.kwh
    })
    const datesArray = days.map(day=>{
        return day.date
    })
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]


    return (
        <View style={styles.body}>
            <BackButton onPressNav={()=>navigation.navigate('Reports')}/>
            <Text style={styles.paragraph}>{month} in review{console.log(datesArray)}</Text>

            <View style={styles.contentContainer}>
            {/* <View style={{ height: 200, padding: 20 }}> */}
                <LineChart
                    style={{ width:400,height:400 }}
                    data={data}
                    gridMin={0}
                    // contentInset={{ top: 10, bottom: 10 }}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid />
                </LineChart>
                <XAxis
                    style={{width:400,height:400, marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(value, index) => index}
                    // contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
            {/* </View> */}
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
    contentContainer: {
        display:'flex',
        width: '100%',
        height: '100%',
        // alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        height: 200,
        paddingTop: 100 
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
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