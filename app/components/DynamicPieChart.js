import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';
import findIcon from './iconGenerator';
import { faChevronUp, faChevronDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function LabelledPieChart({ pieData }) {

    const [showArrow, setShowArrow] = useState({
        topArrow: 'transparent',
        bottomArrow: 'transparent'
    });

    const graphicData = pieData.map(obj => {
        return (
            {
                y: obj.value,
                x: obj.name
            }
        )
    })

    // Calculate total energy usage for center piechart
    let totalValue = 0;
    graphicData.map(obj => {
        totalValue += obj.y
    });

    // Calculate whether energy usage is high or low for displaying arrow
    // const calcAverage = (usage, expected) => {

    //     if (usage !== expected) {
    //         setShowArrow({topArrow: 'red', bottomArrow: 'transparent'})
    //     }
    //     else {
    //         setShowArrow({topArrow: 'transparent', bottomArrow: 'red'})
    //     }
    // }

    // // Too many re renders ???
    // calcAverage(2000, 4000);

    const CustomLabel = (props) => {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: props.y - 11,
                    left: props.x - 11,
                    opacity: 0.8
                }}>
                {findIcon(props.text)}
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
                <View style={styles.innerTextContainer}>
                    <FontAwesomeIcon style={styles.arrowGreen} icon={faChevronUp} size={35} color={showArrow.topArrow} />
                    <View style={styles.flexContainer}>
                        <Text style={styles.innerText}>{totalValue} </Text>
                        <Text style={styles.innerSubText}>kWh</Text>
                    </View>
                    <FontAwesomeIcon style={styles.arrowRed} icon={faChevronDown} size={35} color={showArrow.bottomArrow} />
                    {/* RED: #FA4747 */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerCircle: {
        height: (Platform.OS === 'ios') ? 220 : 230,
        width: (Platform.OS === 'ios') ? 220 : 230,
        backgroundColor: '#272727',
        borderRadius: 200,
        justifyContent: 'center', alignItems: 'center',
        shadowColor: '#F70B5E',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        borderWidth: (Platform.OS === 'ios') ? 0 : 6,
        borderColor: 'rgba(247,11,94,0.18)'
    },
    innerTextContainer: {
        position: 'absolute',
        alignItems: 'center'
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    innerText: {
        color: 'white',
        fontSize: 24
    },
    innerSubText: {
        color: 'white',
        fontSize: 16,
        opacity: 0.8
    },
    arrowRed: {
        backgroundColor: 'transparent'
    }
})