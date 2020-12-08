import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import data from '../../../fakeData/reportsData'

export default function BarChart() {
    const[entireData,setEntireData]=useState(null)
    const[maxKWH,setMaxKWH]=useState(null)

    useEffect(() => {
        // Will need appropriate async function to fetch the data rather than just importing fake data.
        setEntireData(data)
        
    }, [])
    return (
        <View>
            
        </View>
    )
}
