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
import BarChart from './BarChart';

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

    function chunkArrayInGroups(arr, size) {
        var myArray = [];
        if(arr&& size){
            for(var i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i+size));
            }
            return myArray;
        }
    }
    const setChunkifiedArray = () =>{

        var test =[1,2,3];
        return test.map((value,index)=>{
            return <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {chunkArrayInGroups(timeSpecificData,5)[0]}/>
        })

    }
    return (
        <View>
            {
                entireData && timeSpecificData?
                <CarouselCustom displayedArray={setChunkifiedArray(timeSpecificData)}/>
                :
                <Text>Entire data or time specific data not loaded in yet</Text>
            }
        </View>
    )
}
