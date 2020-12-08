import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default function BarChart() {
    // const[entireData,setEntireData]=useState(null)
    // const[maxKWH,setMaxKWH]=useState(null)

    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
      ];
      
    return (
        <View style={styles.body}>
            <ScrollView horizontal={true}>

                <Text>Poop</Text>
                <VictoryChart width={350} theme={VictoryTheme.grayscale}>
                    <VictoryBar data={data} x="quarter" y="earnings" />
                </VictoryChart>
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({
    body:{ 
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
