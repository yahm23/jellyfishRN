import React, { useState,useEffect } from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {CapitaliseString} from '../functional/functions'

export default function DataList(props) {

    const [entireBarData,setEntireBarData]= useState(null)
    const [timeFrame,setTimeFrame]= useState(props.timeFrame)

    useEffect(() => {
        setTimeFrame(props.timeFrame)
        setEntireBarData(props.entireBarData)
        
    }, [props.entireBarDataq])

    return (
        <View style={styles.body}>
            <View style={styles.centerBox}>
                <Text style={{color:'white'}}>{CapitaliseString(timeFrame)}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    centerBox: {
        marginTop: 15,
        flexDirection:'row',
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center'
    },
})