import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
        return (
            <View
                style={{
                    position: 'absolute',
                    top: props.y - 11,
                    left: props.x - 11,
                    opacity: 0.8
                }}>
                <Image resizeMode="contain" style={{ width: 26, height: 26 }} source={findIcon(props.text)} />
            </View>
        )
    };

    return (
        <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.outerCircle}>
                <VictoryPie
                    data={graphicData}
                    width={320}
                    height={320}
                    innerRadius={82}
                    padAngle={1}
                    style={{
                        data: {
                            fill: '#F70B5E', stroke: "pink", strokeWidth: 0, strokeOpacity: 0.4
                        },
                        labels: {
                            fill: 'white', fontSize: 18, padding: 40
                        },
                    }}
                    labelComponent={<CustomLabel />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerCircle: {
        height: 220,
        width: 220,
        backgroundColor: '#272727',
        borderRadius: 200,
        justifyContent: 'center', alignItems: 'center',
        marginTop: (Platform.OS === 'ios') ? 120 : 70,

        shadowColor: '#F70B5E',
        shadowRadius: 10,
        shadowOpacity: 0.6,

    }
})