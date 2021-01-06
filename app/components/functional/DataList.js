import React, { useState,useEffect } from 'react'
import { View, Image, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {CapitaliseString, ChunkArrayIntoGroups , GetMonthName, GetOrdinalSuffix} from '../functional/functions'

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
        let captilisedMonth = selection.month? `${CapitaliseString((GetMonthName(selection.month)))}` : null;

        let title = selection.hour ?
                        `${selection.hour}:00 ${ordinalDay} ${captilisedMonth} ${selection.year}` :
                        selection.day ?
                            `${ordinalDay} ${captilisedMonth} ${selection.year}` :
                            selection.month ?
                                `${captilisedMonth} ${selection.year}` :
                                selection.year ?
                                    selection.year : null
        return title;
    }

    return (
        <View style={styles.body}>
            <View style={styles.centerBox}>
                <Text style={styles.titleDate}>{createSelectionTitle()}</Text>
                {/* <Button onPress={()=>createSelectionTitle()} title="LOG"></Button> */}
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
    titleDate:{
        color:'#5EFC8D',
        fontSize:24,
        fontFamily: 'GothamRounded-Bold',
        

    }
})