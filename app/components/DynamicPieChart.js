import React from 'react';
import { View, Text, Image } from 'react-native';
import { VictoryPie } from 'victory-native';
import findIcon from './iconGenerator';


export default function LabelledPieChart({ pieData }) {

    const graphicData = pieData.map(obj => {
        return (
            {
                y: obj.value,
                x: obj.name
            }
        )
    })

    const CustomLabel = (props) => {
        // const labelName = props.data[1].xName;
        console.log(props.text);
        return (
            <View
                style={{
                    position: 'absolute',
                    top: props.y - 12,
                    left: props.x - 12
                }}>
                <Image resizeMode="contain" style={{ width: 26, height: 26 }} source={findIcon(props.text)} />
            </View>
        )
    };

    return (
        <View>
            <VictoryPie
                data={graphicData}
                width={320}
                height={320}
                innerRadius={82}
                padAngle={1}
                colorScale={['#F70B5E']}
                style={{
                    labels: {
                        fill: 'white', fontSize: 18, padding: 40
                    },
                }}
                labelComponent={<CustomLabel />}
            />
        </View>
    )
}