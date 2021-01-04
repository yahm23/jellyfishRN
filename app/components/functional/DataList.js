import React, { useState } from 'react'

export default function DataList(props) {

    const [entireBarData,setEntireBarData]= useState(null)

    useEffect(() => {
        setEntireBarData(props.entireBarData)
        
    }, [props.entireBarDataq])
    return (
        <View>
            <View>
                <Text>{props.}</Text>
            </View>
        </View>
    )
}
