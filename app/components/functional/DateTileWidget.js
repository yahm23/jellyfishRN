import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png'

export default function DateTileWidget(props) {
    return (
        <View style={styles.widget}>
            <View style={styles.data}>
                <Text style={styles.numbers}>£{props.cost}</Text>
                <Text style={styles.numbers}>{props.kwH}kwH</Text>
            </View>
            <Text style={styles.widgetText}>{props.month}</Text>
            <Image style={styles.arrow} source={arrowIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    widget: {
        marginBottom: 2,
        height: 120,
        display:"flex",
        flexDirection:"row",
        width: '100%',
        backgroundColor: '#141414',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    numbers:{
        color:'white',
        fontSize: 16,
        alignItems: 'center'
    },
    data: {
        color:'white',
        marginLeft: 20,
    },
    arrow: {
        position: 'absolute',
        right: 20,
        height: 25,
        width: 25
    },
    widgetText: {
        // position: 'absolute',

        marginLeft: 40,
        color: 'white',
        fontSize: 40
    }
});
