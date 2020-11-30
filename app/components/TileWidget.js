import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import questionMark from '../images/roomIcons/question-mark.png';
import findIcon from '../components/iconGenerator';
import arrowIcon from '../images/Tab_navigation_icons/right-arrow.png';

const AppliancesTileWidget = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.widget}>
                <View style={styles.detailsFlex}>
                    <Image style={styles.widgetImage} source={findIcon(props.name) !== null ? findIcon(props.name) : questionMark} />
                    <Text style={styles.widgetText}>{props.name}</Text>
                </View>
                <Image style={styles.arrow} source={arrowIcon} />
            </View>
        </TouchableOpacity>
    )
}
const ReportsTileWidget = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.widget}>
                <View style={styles.labelContainer}>
                    <Text style={styles.header}>{props.month}</Text>
                    <View style={styles.detailsFlex}>
                        <Text style={styles.details}>£{props.cost}</Text>
                        <Text style={styles.details}>|</Text>
                        <Text style={styles.details}>{props.kwH} kWh</Text>
                    </View>
                </View>
                <Image style={styles.arrow} source={arrowIcon} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    widget: {
        marginBottom: 2,
        height: 120,
        width: '100%',
        backgroundColor: '#141414',
        justifyContent: 'center'
    },
    widgetImage: {
        // Stuff
    },
    detailsFlex: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 10
    },
    arrow: {
        position: 'absolute',
        right: 20,
        height: 25,
        width: 25
    },
    details: {
        color: 'white',
        marginRight: 10,
        opacity: 0.7,
        fontSize: 14
    },
    widgetText: {
        marginLeft: 30,
        color: 'white',
        fontSize: 16
    },
    header: {
        marginLeft: 40,
        color: 'white',
        fontFamily:'GothamRounded-Bold',
        fontSize: 24,
    }
});

export { AppliancesTileWidget, ReportsTileWidget };