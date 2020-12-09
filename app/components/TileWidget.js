import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import questionMark from '../images/roomIcons/question-mark.png';
import findIcon from '../components/iconGenerator';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const AppliancesTileWidget = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.widget}>
                <View style={styles.detailsFlex}>
                    {findIcon(props.name)}
                    <View>
                        <Text style={styles.widgetText}>{props.name}</Text>
                        <View style={styles.activeBoxs}>
                            <Text style={[styles.activityText, styles.active]}>3 active</Text>
                            <Text style={[styles.activityText, styles.inActive]}>2 inactive</Text>
                        </View>
                    </View>
                </View>
                <FontAwesomeIcon style={styles.arrow} icon={faChevronRight} size={25} color={'white'} />
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
                <FontAwesomeIcon style={styles.arrow} icon={faChevronRight} size={25} color={'white'} />
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
        fontFamily:'GothamRounded-Medium',
        marginLeft: 30,
        color: 'white',
        fontSize: 16
    },
    header: {
        marginLeft: 40,
        color: 'white',
        fontFamily:'GothamRounded-Bold',
        fontSize: 24,
    },
    activityText:{
        fontFamily:'GothamRounded-Bold',
        marginLeft: 30,
        justifyContent:'center',
        color: 'white',
        fontSize: 15,
        width:100,
        paddingVertical: 8,
        paddingHorizontal: 8,
        textAlign:'center',
        borderRadius: 8,
        borderWidth: 1,
        
    },
    active:{
        backgroundColor:'#091D03',
        borderColor:'#1B6E02',
        
    },
    inActive:{
        backgroundColor:'#1D1D1D',
        borderColor:'#404040',
        marginLeft: 10,

    },
    activeBoxs:{
        paddingTop: 10,
        flex: 0,
        justifyContent:'center',
        alignContent: 'center',
        flexDirection:'row'
    }
});

export { AppliancesTileWidget, ReportsTileWidget };