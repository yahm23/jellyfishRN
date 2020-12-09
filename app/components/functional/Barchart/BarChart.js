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
    const[specificTimeData,setSpecificTimeData]=useState()
    const[maxData,setMaxDataValue]=useState()
    const[pixelPowerConversion,setpixelPowerConversion]=useState()
    

    useEffect(() => {
        setSpecificTimeData(props.specificTimeFrameData)
        // setMaxDataValue(findDataMaxValue(specificTimeData))
        // setpixelPowerConversion(calcPixelConversion())
    }, [props])

    const maxBarHeight = windowHeight * 0.35 * 0.9
    
    const findDataMaxValue = (input) =>{
        if(input){
            var powerArray = input.map(value => {
                return value.total_kWh
            });
            return Math.max(...powerArray)
        }
    }

    const calcPixelConversion = ()=>{
        return maxBarHeight/maxData;
    }
    const initBarChart = ()=>{
        setMaxDataValue(findDataMaxValue(props.specificTimeFrameData))
        setpixelPowerConversion(calcPixelConversion())
        
    }

    return (
        <View>
            {console.log(specificTimeData)}
            {/* {console.log(pixelPowerConversion)} */}
            {/* {console.log(maxData + ' kwh')} */}
            {pixelPowerConversion && maxData ?
                    <View>
                        <View style={{height:(maxBarHeight/maxData)*maxData, backgroundColor: 'black', width:45}}/>
                        {/* {console.log()} */}

                    </View>
                :
                null
            }
        </View>
    )
}
