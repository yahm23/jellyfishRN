import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
  } from 'react-native';
import CarouselCustom from './CarouselCustom';

export default function BarChartContainer(props) {
    const [entireData,setEntireData] = useState(null);
    const [timeSpecificData,setTimeSpecificData] = useState(null);

    useEffect(() => {
        async function setData (){
            await setEntireData(props.entireData)
            // console.log(props.entireData);
            console.log(props.specificTimeData);
            await setTimeSpecificData(props.specificTimeData)
        }
    
        setData()
    }, [props.specificTimeData])


    const getSpecificTimeFrameData = (timeframe) => {
        if (props.entireData){
            switch (timeframe) {
                case "Hour":
                return props.entireData.hours
                
                case "Day":
                return props.entireData.days
                
                case "Month":
                return props.entireData.months
                
                case "Year":
                return props.entireData.years
            }
        }
    }



    return (
        <View>
            {
                entireData && timeSpecificData?
                <CarouselCustom/>
                :
                <Text>Entire data or time specific data not loaded in yet</Text>
            }
        </View>
    )
}
