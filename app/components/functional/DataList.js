import React, { useState,useEffect } from 'react'
import { View, Image, Text, Button, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {CapitaliseString, ChunkArrayIntoGroups , ExtractDataFromChunked, GetMonthName, GetOrdinalSuffix} from '../functional/functions'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
// import greenDown from '../images/indicators/GreenTriangle.png'
import redUp from '../../images/indicators/RedTriangle.png'


export default function DataList(props) {

    const [timeFrame,setTimeFrame]= useState(props.timeFrame)
    const [selected,setSelected]= useState(props.selected)
    const [entireData,setEntireData]= useState(props.entireData)
    const [priceKWh,setPriceKWh]= useState(15.4) // this will need to be fetched for the user based on their provider etc
    

    useEffect(() => {
        setTimeFrame(props.timeFrame)
        setEntireData(props.entireData)
        setSelected(props.selected)

    }, [props.selected])

   

    const createSelectionTitle = () => {

        let selection = ExtractDataFromChunked(entireData[timeFrame], 5 , [selected[0],selected[1]])

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

    const createInformationSubheading = () =>{
        let selection = ExtractDataFromChunked(entireData[timeFrame], 5 , [selected[0],selected[1]])
        console.log(selection.total_kWh);
        return `${selection.total_kWh} kWh | £${selection.total_kWh*priceKWh/100} `
    }
    


    return (
        <View style={styles.body}>
            <View style={styles.centerBox}>
                <Text style={styles.titleDate}>{createSelectionTitle()}</Text>
                <Text style={styles.stats}>{createInformationSubheading()}</Text>
                
                {/* <FontAwesomeIcon icon={faPlus} size={30} color={'white'} style={styles.addIcon} />

                <Image source={{
          url: 'https://reactnative.dev/img/tiny_logo.png',
        }}/> */}
                <Image source={redUp} style={styles.logo} />

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
        // flexDirection:'row',
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    titleDate:{
        color:'#5EFC8D',
        fontSize:24,
        fontFamily: 'GothamRounded-Bold',
    },
    stats:{
        color:'#D0D0D0',
        alignSelf: 'center',
        marginTop:20,
        fontSize:18,
        alignContent: 'center',
        fontFamily: 'GothamRounded-Medium',

    }
})