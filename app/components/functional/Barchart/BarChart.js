import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarChart(props) {
    const[specificTimeData,setSpecificTimeData]=useState(null)
    const[maxData,setMaxDataValue]=useState(null)
    const[pixelPowerConversion,setpixelPowerConversion]=useState(null)
    

    useEffect(() => {
        setSpecificTimeData(props.specificTimeFrameData)
        setMaxDataValue(findDataMaxValue(props.specificTimeFrameData))
        setpixelPowerConversion(calcPixelConversion(findDataMaxValue(props.specificTimeFrameData)))

    }, [props])

    const maxBarHeight = windowHeight * 0.35 * 0.85
    
    const findDataMaxValue = (input) =>{
        if(input){
            var powerArray = input.map(value => {
                return value.total_kWh
            });
            return Math.max(...powerArray)
        }
    }

    const calcPixelConversion = (input)=>{
        return maxBarHeight/input;
    }

    const BarCreator = (data) => {
        // return(
        //     <View>
        //         <View style={{height:120, backgroundColor: 'yellow', width:45}}/>
        //         {data.map(()=>{
        //             console.log('single value');
        //             return <View style={{height:120, backgroundColor: 'black', width:45}}/>
        //         })}
        //     </View>

        // )
        return (
            <View style={{display:'flex',flexDirection:'row'}}>
                {data.map((single)=>{
                    return (
                        <View style={{paddingHorizontal:10, alignContent:'flex-end'}}>
                            <View style={{height:(maxBarHeight/maxData)*single.total_kWh, backgroundColor: 'black', width:45}}/>
                        </View>
                    )
                })}
            </View>
        )
            
    }

    return (
        <View>
            {pixelPowerConversion && maxData ?
                    <View>
                    {/* {console.log(specificTimeData)} */}
                    {console.log(maxData + ' kwh')}
                        {/* <View style={{height:(maxBarHeight/maxData)*maxData, backgroundColor: 'black', width:45}}/> */}
                        {BarCreator(specificTimeData)}
                    </View>
                :
                null
            }
        </View>
    )
}
