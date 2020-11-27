import React from 'react';
import { View, Text } from 'react-native';
import { VictoryPie } from 'victory-native';


export default function LabelledPieChart({ pieData }) {

    const graphicData = pieData.map(obj => {
        return (
            {
                y: obj.value,
                x: obj.name
            }
        )
    })

    return (
        <View>
            <VictoryPie
                data={graphicData}
                width={320}
                height={320}
                innerRadius={82}
                padAngle={2}
                colorScale={['#F70B5E']}
                style={{
                    labels: {
                        fill: 'white', fontSize: 18, padding: 35
                    },
                }}
            />
        </View>
    )
}