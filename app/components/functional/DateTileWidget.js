import React from 'react'
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png'

export default function DateTileWidget(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>

        <View style={styles.widget}>
            <View style={styles.data}>
                <Text style={styles.numbers}>£{props.cost}</Text>
                <Text style={styles.numbers}>{props.kwH}kwH</Text>
            </View>
            <Text style={styles.month}>{props.month}</Text>
            {/* <Text style={{color:'yellow',fontFamily:'Feather'}}>{props.month}</Text> */}
            <Image style={styles.arrow} source={arrowIcon} />
        </View>
        </TouchableOpacity>
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
    month: {
        // marginLeft: 40,
        marginLeft: 20,
        color: 'white',
        fontSize: 40,
        // fontFamily:Platform.OS === 'ios'? 'GothamRounded-Light':'GothamRounded-Bold',
        fontFamily:'GothamRounded-Medium',
    }
});
