import React from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import brain from '../brain';
import SearchBar from '../SearchBar';
import arrowIcon from '../../images/Tab_navigation_icons/right-arrow.png';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import questionMark from '../../images/roomIcons/question-mark.png';
import findIcon from '../iconGenerator';

export default function Appliances() {

    const TileWidget = (props) => {
        return (
            <View style={styles.widget}>
                <Image style={styles.widgetImage} source={findIcon(props.name) !== null ? findIcon(props.name) : questionMark} />
                <Text style={styles.widgetText}>{props.name}</Text>
                <Image style={styles.arrow} source={arrowIcon} />
            </View>
        )
    }

    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={JellyLogo} />
            <View style={styles.searchBarContainer}>
                <SearchBar />
            </View>
            <ScrollView style={styles.widgetContainer}>
                {brain.map((room, index) => {
                    return (
                        <TileWidget name={room.name}/>
                    )
                })}
            </ScrollView>
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
