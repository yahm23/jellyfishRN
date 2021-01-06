import React, { useState,useEffect } from 'react'
import { View, Image, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {CapitaliseString, ChunkArrayIntoGroups , GetOrdinalSuffix} from '../functional/functions'

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

        let firstIndex = selected[0]
        let secondIndex = selected[1]

        let selection = chunkedArray[firstIndex][secondIndex];

        let ordinalDay = selection.day? `${selection.day}${GetOrdinalSuffix(selection.day)}` : null;
        let captilisedMonth = selection.month? `${selection.month}${CapitaliseString(selection.month)}` : null;

        let title = selection.hour ?
                        `${selection.hour}:00 ${ordinalDay} of ${captilisedMonth}` :
                        selection.day ?
                            `${ordinalDay}` :
                            selection.month ?
                                selection.month.slice(0, 3) :
                                selection.year ?
                                    selection.year : null
        console.log(title);
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