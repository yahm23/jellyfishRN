import React from 'react'
import { View , Dimensions} from 'react-native'

export default function DayTile(props) {
    return (
        <View>
            <Text>{props.month}</Text>
        </View>
    )
}
