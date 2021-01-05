import React, { useState,useEffect } from 'react'
import { View, Image, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {CapitaliseString,ChunkArrayIntoGroups} from '../functional/functions'

export default function DataList(props) {

    const [timeFrame,setTimeFrame]= useState(props.timeFrame)
    const [selected,setSelected]= useState(props.selected)
    const [entireData,setEntireData]= useState(props.entireData)

    useEffect(() => {
        setTimeFrame(props.timeFrame)
        setEntireData(props.entireData)
        setSelected(props.selected)

    }, [props.selected])

    const createSelectionTitle = () => {
        let specificTimeframe = entireData[timeFrame];
        let chunkedArray = ChunkArrayIntoGroups(specificTimeframe,5)
        // let selection = 
        console.log(chunkedArray[0][1]);
        let selectedPeriod = specificTimeframe
    }

    return (
        <View style={styles.body}>
            <View style={styles.centerBox}>
                <Text style={{color:'white'}}>{CapitaliseString(timeFrame)}</Text>
                <Button onPress={()=>createSelectionTitle()} title="LOG"></Button>
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