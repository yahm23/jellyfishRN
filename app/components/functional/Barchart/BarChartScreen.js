import React, { useState, useEffect } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, YellowBox } from 'react-native';
// import SearchBar from '../../SearchBar';
import SearchBar from '../SearchBar'
import JellyLogo from '../../../images/brand/Jellyfish-white.png';
// import DynamicPieChart from '../DynamicPieChart';
// import brain from '../fakeData/brain';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BarChartCarousel from './BarChartCarousel2';
import data from '../../fakeData/reportsData'
import { values } from '../../fakeData/brain';
import BarChartContainer from './BarChartContainer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarScreenScreen(props) {
    const[entireData,setEntireData]=useState(null)
    const[timeFrame,setTimeFrame]=useState('Day')
    const[maxKWH,setMaxKWH]=useState(null)

    const times = ['Hour','Day','Month','Year']
    
    useEffect(() => {
        // Will need appropriate async function to fetch the data rather than just importing fake data.
        setEntireData(data)
        
    }, [])



    const DotsLabels = ()=>{
        return(
            <View style={styles.dotsContainer}>
                {times.map((value)=>{
                    var active;
                    if(value === timeFrame){
                        active=true
                    }else{
                        active=false
                    }
                return (
                    <TouchableOpacity onPress={()=>{setTimeFrame(value)}} key={value}>
                        <View style={[styles.dots,active? styles.activeDot:null]}/>
                        <Text style={[styles.label,active? styles.activeLabel:null]}>{value}</Text>
                    </TouchableOpacity>)
                })}
            </View>
        ) 
    }
    
    const getSpecificTimeFrameData = (timeframeInput) => {
        if (entireData){
            switch (timeframeInput) {
                case "Hour":
                return entireData.hours
                
                case "Day":
                return entireData.days
                
                case "Month":
                return entireData.months
                
                case "Year":
                return entireData.years
            }
        }
    }




    return (
        <View>
            <View style={styles.body}>
                <View style={styles.topBox}>
                    <Image style={styles.logo} source={JellyLogo} />
                    <View style={styles.searchBarContainer}>
                        <SearchBar />
                    </View>
                </View>
                <View >
                    <View style={styles.barchartContainer}>
                        {/* <BarChartCarousel entireData={entireData} timeFrame={timeFrame}/>  */}
                        <BarChartContainer entireData={entireData} specificTimeData={getSpecificTimeFrameData(timeFrame)} timeFrame={timeFrame} />
                        </View>
                    <View style={styles.parentNav}><DotsLabels/></View>
                </View>
                
            </View>
        </View>
    );
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
    logo: {
        marginTop: 40,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    searchBarContainer: {
        marginTop: 30
    },

    
    parentNav:{
        alignSelf:'center',
        width:windowWidth * 0.75,
        height:50,
        // backgroundColor:'yellow'
    }, 
    dotsContainer:{
        paddingVertical:10,
        width:300,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        textAlign:'center',
    },
    dots:{
        alignSelf:'center',
        backgroundColor:'grey',
        width:10,
        height:10,
        borderRadius:500,
    },
    activeDot:{
        backgroundColor:'white'
    },
    label:{
        paddingTop:15,
        fontFamily:'GothamRounded-Medium',
        color:'white'
    },
    activeLabel:{
        color:'white'
    },
    barchartContainer:{
        alignSelf:'center',
        height:windowHeight*0.35,
        width:windowWidth*0.8,
    }
    
})