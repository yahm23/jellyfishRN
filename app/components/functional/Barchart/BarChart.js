import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarChart(props) {
    const[specificTimeData,setSpecificTimeData]=useState(props.specificTimeFrameData)
    const[maxData,setMaxDataValue]=useState()
    

    useEffect(() => {
        setMaxDataValue(findDataMaxValue(props.specificTimeFrameData))
    }, [props.specificTimeFrameData])

    const entireData = props.entireData
    const maxBarHeight = windowHeight * 0.35 * 0.9
    
    const findDataMaxValue = (input) =>{
        if(input){
            var powerArray = input.map(value => {
                return value.total_kWh
            });
            return Math.max(...powerArray)
        }
    }

    return (
        <View>
            {console.log(props.specificTimeFrameData)}
            {console.log(maxData)}
        </View>
    )
}
