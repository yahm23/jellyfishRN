import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'; 


export default function SingleBar(props) {
    const [pressed, setPressed] = useState(false)
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

    const TogglePress = () =>{
        var initial = pressed;
        setPressed(!initial)
    }


    return (
        <View  style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={()=>{
               TogglePress()
            }} 
            style={{
                paddingHorizontal: 5, flex: 0, justifyContent: 'center', alignItems: 'center' 
            }}
            >
                <View style={[styles.barPlaceholder, { height: props.maxBarHeight }]}>
                <View style={[styles.bars, { height: (props.maxBarHeight / props.maxValue) * props.single.total_kWh, backgroundColor: pressed? '#5EFC8D':'#8377D1'  }]} />
            </View>
            <Text style={styles.labels}>{
                props.single.hour ?
                    `${props.single.hour}:00` :
                    props.single.day ?
                        `${props.single.day}${getOrdinalSuffix(props.single.day)}` :
                        props.single.month ?
                            props.single.month.slice(0, 3) :
                            props.single.year ?
                                props.single.year : null
            }
            </Text>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    bars: {
        backgroundColor: '#8377D1',
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

