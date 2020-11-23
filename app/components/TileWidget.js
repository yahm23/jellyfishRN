import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import questionMark from '../images/roomIcons/question-mark.png';
import findIcon from '../components/iconGenerator';
import arrowIcon from '../images/Tab_navigation_icons/right-arrow.png'

const TileWidget = (props) => {
    return (
        <View style={styles.widget}>
            <Image style={styles.widgetImage} source={findIcon(props.name) !== null ? findIcon(props.name) : questionMark} />
            <Text style={styles.widgetText}>{props.name}</Text>
            <Image style={styles.arrow} source={arrowIcon} />
        </View>
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
        marginLeft: 20,
    },
    arrow: {
        position: 'absolute',
        right: 20,
        height: 25,
        width: 25
    },
    widgetText: {
        position: 'absolute',
        marginLeft: 80,
        color: 'white',
        fontSize: 16
    }
})

export default TileWidget;