import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import SearchBar from '../SearchBar';

import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import bed_front from '../../images/roomIcons/bed-front.png';
import bed_side from '../../images/roomIcons/bed-side.png';
import office_chair from '../../images/roomIcons/office-chair.png';
import oven from '../../images/roomIcons/oven.png';
import question_mark from '../../images/roomIcons/question-mark.png';

export default function Appliances() {

    const rooms = [
        { image: bed_front, name: "Master Bedroom"},
        { image: bed_side, name: "Olivia's Bedroom" },
        { image: office_chair, name: "Kitchen" },
        { image: oven, name: "Office" },
        { image: question_mark, name: "Not Categorized" }
    ]

    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={JellyLogo} />
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>

            <View style={styles.widgetContainer}>
                {rooms.map(room => {
                    return (
                        <View style={styles.widget} >
                            <Image style={styles.widgetImage} source={room.image} />
                            <Text style={styles.widgetText}>{room.name}</Text>
                            <Image style={styles.arrow} source={arrowIcon} />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    logo: {
        marginTop: 80,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 20
    },
    searchBar: {
        borderRadius: 20
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    widgetContainer: {
        marginTop: 40
    },
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