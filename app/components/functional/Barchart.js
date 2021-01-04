import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// ----------------------------------------------------------------------------------------------------------------------- //

export default function BarChart(props) {
    const [selectedBar,setSelectedBar] = useState(1)

    useEffect(() => {
        setSelectedBar(props.specificIndex)
    }, [props.specificIndex])

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
        props.setSpecificIndex(value)

    }
    const BarCreator = (data) => {
        return (
                <View style={{ flexDirection: 'row',justifyContent: 'center'}}>
                    <Text style={{color:'white'}}>{selectedBar}</Text>
                    {data.map((single,index) => {
                        return (
                            <View key={index} style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    paddingHorizontal: 5, flex: 0, justifyContent: 'center', alignItems: 'center' 
                                    }}

                                    onPress = {()=>{}}
                                    >
                                    <View style={[styles.barPlaceholder, { height: maxBarHeight }]}>
                                    <View style={[styles.bars, { height: (maxBarHeight / maxValue) * single.total_kWh,
                                        backgroundColor:props.specificIndex == index? '#5EFC8D':'#8377D1' 
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
                </View>
        )

    }

    return (
        <View>

            <View>
                {BarCreator(singleTimeFrameData)}
            </View>
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