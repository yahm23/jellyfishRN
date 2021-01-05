import React, { useState,useEffect } from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export default function DataList(props) {

    const [entireBarData,setEntireBarData]= useState(null)

    useEffect(() => {
        setEntireBarData(props.entireBarData)
        
    }, [props.entireBarDataq])

    return (
        <View>
            <View>
                <Text>DATA LIST COMP</Text>
            </View>
        </View>
    )
}
