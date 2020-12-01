import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import BackButton from '../functional/BackButton';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'


export default function ReportsStackPage({ navigation, route }) {
    const month = route.params.month;

    const days = route.params.days;

    const energyArray = days.map(day=>{
        return day.kwh
    })
    const dataArray = days.map(day=>{
        return (
            {
                x: parseInt(day.date.split('/')[0]),
                y: day.kwh
            }
            )
    })
    const maxPower = Math.max.apply(Math, dataArray.map(function(day) { return day.y}))
    const maxDays = Math.max.apply(Math, dataArray.map(function(day) { return day.x}))
    const roundedMaxPower = (Math.ceil(maxPower / 10) * 10)

    const getOrdinalSuffix = (number) => {
            if (number> 3 && number< 21) return 'th';
        switch (number% 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    };
    const dayTicks = days.map(day=>{
        return `${day.date.split('/')[0]}`
    })

  

    return (
        <View style={styles.body}>
            <BackButton onPressNav={()=>navigation.navigate('Reports')}/>
            <Text style={styles.paragraph}>{month} in Review</Text>
            <Chart
                // style={{ height: 200, width: 400 }}
                style={styles.contentContainer}
                data={dataArray}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                yDomain={{ min: 0, max: roundedMaxPower }}
                xDomain={{ min: 1, max: maxDays +1 }}
                viewport={{ size: { width: 4 } }}
                >
                <VerticalAxis tickCount={4} theme={{ labels: {formatter: (v) => String(v).concat('kWh'), label:{color:'white'}}}} />
                <HorizontalAxis tickValues={dayTicks} theme={{ labels: {formatter: (v) => String(v).concat(getOrdinalSuffix(v)), label:{color:'white'}}}} />
                <Area theme={{ gradient: { from: {color: '#F70B5E', opacity: 0.1  }, to: { color: '#1A1A1A', opacity: 0.1 } }}} />
                <Line theme={{ stroke: { color: '#F70B5E', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
            </Chart>


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
        height:200,
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