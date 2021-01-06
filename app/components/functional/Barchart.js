import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {GetMonthName, GetOrdinalSuffix} from '../functional/functions'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// ----------------------------------------------------------------------------------------------------------------------- //

export default function BarChart(props) {
    const [touchedBar,setTouchedBar] = useState([0,0])

    useEffect(() => {
        setTouchedBar([props.touchedBar[0],props.touchedBar[1]])
    }, [props.touchedBar])

    // Find max data -------------------------------------------------- //

    const findDataMaxValue = (input) => {
        if (input) {
            var powerArray = input.map(value => {
                return value.total_kWh
            });
            return Math.max(...powerArray)
        }
    }

    const singleTimeFrameData = props.specificTimeFrameData;
    const maxValue = findDataMaxValue(singleTimeFrameData);
    const maxBarHeight = (windowHeight * 0.35) * 0.80;

    const chunkIndex = props.chunkIndex

    const handlePress = (value) => {
        let activeSlide = props.testIndex;
        let newBar = [activeSlide,value]

        props.setTouchedBar(newBar)
        setTouchedBar(newBar)

        // console.log('Touched bar in child ['+props.touchedBar +']');
        // console.log('active slide essentially '+props.testIndex);
    }

    const BarCreator = (data) => {
        return (
                <View key={touchedBar[1]} style={{ flexDirection: 'row',justifyContent: 'center'}}>
                    {data.map((single,index) => {
                        return (
                            <View key={index} style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 5, flex: 0, justifyContent: 'center', alignItems: 'center' 
                                    }}

                                    onPress = {()=>{handlePress(index)}}
                                    >
                                    <View style={[styles.barPlaceholder, { height: maxBarHeight }]}>
                                    <View style={[styles.bars, { height: (maxBarHeight / maxValue) * single.total_kWh,
                                        backgroundColor: props.touchedBar[0] == props.testIndex && props.touchedBar[1] == index?
                                                    '#5EFC8D':'#8377D1' 
                                    }]} />
                                </View>
                                <Text style={styles.labels}>{
                                    single.hour ?
                                        `${single.hour}:00` :
                                        single.day ?
                                            `${single.day}${GetOrdinalSuffix(single.day)}` :
                                            single.month ?
                                            GetMonthName(single.month).slice(0, 3) :
                                                single.year ?
                                                    single.year : null
                                }
                                </Text>
                                </TouchableOpacity>
                                
                            </View>
                        )
                    })}
                    
                </View>
        )

    }

    return (
        <View>
            {BarCreator(singleTimeFrameData)}
        </View>
    )
}

const styles = StyleSheet.create({
    bars: {
        borderRadius: 10,
        width: 24
    },
    barPlaceholder: {
        width: 24,
        backgroundColor: '#272727',
        borderRadius: 10,
        flexDirection: 'column-reverse'
    },
    labels: {
        textAlign: 'center',
        paddingTop: 15,
        fontFamily: 'GothamRounded-Medium',
        color: 'white',
        width: 44,
        alignContent: 'center',
        justifyContent: 'center'
    }
})