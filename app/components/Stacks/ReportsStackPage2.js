import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import BackButton from '../functional/BackButton';
// import {LineChart} from "react-native-chart-kit";
import { LineChart, Grid, XAxis,YAxis } from 'react-native-svg-charts'
import { G, Line } from 'react-native-svg'

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

    // const CustomGrid = ({ x, y, data, ticks }) => (
    //     <G>
    //         {// Horizontal grid
    //         ticks.map((tick) => (
    //             <Line key={tick} x1={'0%'} x2={'100%'} y1={y(tick)} y2={y(tick)} stroke={'grey'} />
    //         ))}
    //         {// Vertical grid
    //         data.map((_, index) => (
    //             <Line key={index} y1={'0%'} y2={'100%'} x1={x(index)} x2={x(index)} stroke={'grey'} />
    //         ))}
    //     </G>
    // )

    const inset = {top: 10, bottom: 10, right:10}
    return (
        <View style={styles.body}>
            <BackButton onPressNav={()=>navigation.navigate('Reports')}/>
            <Text style={styles.paragraph}>{month} in review{console.log(datesArray)}</Text>

            <View style={styles.contentContainer}>
            {/* <View style={{ height: 200, padding: 20 }}> */}
                <View style={{ height:250,  flexDirection: 'row' }}>
                    <YAxis
                            data={energyArray}
                            contentInset={{ top: 10, bottom: 10,left: 50, right: 50 }}
                            svg={{
                                fill: 'white',
                                fontSize: 10,
                            }}
                            numberOfTicks={10}
                            formatLabel={(value) => `${value} kWh`}
                        />
                    <LineChart
                        style={{ width:400,height:250 }}
                        data={energyArray}
                        // gridMin={0}
                        contentInset={inset}
                        svg={{ stroke: '#F70B5E', strokeWidth:'4' }}
                    >
                    <CustomGrid belowChart={true} />

                    </LineChart>
                </View>
                <XAxis
                    style={{width:400, marginHorizontal:-10}}
                    data={energyArray}
                    formatLabel={(value, index) => datesArray[index].split('/')[0]}
                    contentInset={inset}
                    svg={{ fontSize: 12, fill: 'white' }}
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
        // width: '80%',
        height: '100%',
        // alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // height: 200,
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