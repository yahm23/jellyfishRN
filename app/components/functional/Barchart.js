import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// ----------------------------------------------------------------------------------------------------------------------- //

export default function BarChart(props) {
    const [touchedBar,setTouchedBar] = useState([0,0])

    useEffect(() => {
        // setTouchedBar(props.touchedBar)
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

    // Get ordinal suffix --------------------------------------------- //

    const getOrdinalSuffix = (number) => {
        if (number > 3 && number < 21) return 'th';
        switch (number % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

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
                                        backgroundColor: touchedBar[0] == props.testIndex && touchedBar[1] == index?
                                                    '#5EFC8D':'#8377D1' 
                                    }]} />
                                </View>
                                <Text style={styles.labels}>{
                                    single.hour ?
                                        `${single.hour}:00` :
                                        single.day ?
                                            `${single.day}${getOrdinalSuffix(single.day)}` :
                                            single.month ?
                                                single.month.slice(0, 3) :
                                                single.year ?
                                                    single.year : null
                                }
                                </Text>
                                </TouchableOpacity>
                                
                            </View>
                        )
                    })}
                    {/* <Text style={{color:'white'}}>{touchedBar[0]}{touchedBar[1]}</Text> */}
                    {/* <Button title="change tb" onPress={()=>{props.setTouchedBar([1,1])}}> </Button> */}
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
        // backgroundColor: '#8377D1',
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