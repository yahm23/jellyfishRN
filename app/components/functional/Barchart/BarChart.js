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

    const [specificTimeData, setSpecificTimeData] = useState(null)
    const [maxData, setMaxDataValue] = useState(null)
    const [pixelPowerConversion, setpixelPowerConversion] = useState(null)


    useEffect(() => {
        setSpecificTimeData(props.specificTimeFrameData)
        setMaxDataValue(findDataMaxValue(props.specificTimeFrameData))
        setpixelPowerConversion(calcPixelConversion(findDataMaxValue(props.specificTimeFrameData)))

    }, [props])

    const maxBarHeight = windowHeight * 0.35 * 0.80

    const findDataMaxValue = (input) => {
        if (input) {
            var powerArray = input.map(value => {
                return value.total_kWh
            });
            return Math.max(...powerArray)
        }
    }

    const calcPixelConversion = (input) => {
        return maxBarHeight / input;
    }

    const getOrdinalSuffix = (number) => {
        if (number > 3 && number < 21) return 'th';
        switch (number % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const BarCreator = (data) => {

        return (
            <View style={{ flexDirection: 'row' }}>
                {data.map((single) => {
                    return (
                        <View style={{ paddingHorizontal: 10, flex: 0, justifyContent: 'flex-end' }}>
                            <View style={[styles.bars, { height: (maxBarHeight / maxData) * single.total_kWh }]} />
                            <Text style={styles.labels}>{
                                single.hour ?
                                    `${single.hour}:00` :

                                    single.day ?
                                        `${single.day}${getOrdinalSuffix(single.day)}` :

                                        single.month ?
                                            single.month.slice(0, 3) :

                                            single.year ?
                                                single.year :

                                                null
                            }
                            </Text>
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
                    {BarCreator(specificTimeData)}
                </View>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    bars: {
        backgroundColor: '#8377D1',
        borderRadius: 10,
        width: 35
    },
    labels: {
        textAlign: 'center',
        paddingTop: 15,
        fontFamily: 'GothamRounded-Medium',
        color: 'white'
    }
})
