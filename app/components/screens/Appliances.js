import React from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import brain from '../brain';
import SearchBar from '../SearchBar';;
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import TileWidget from '../TileWidget';

export default function Appliances() {

    // const TileWidget = (props) => {
    //     return (
    //         <View style={styles.widget}>
    //             <Image style={styles.widgetImage} source={findIcon(props.name) !== null ? findIcon(props.name) : questionMark} />
    //             <Text style={styles.widgetText}>{props.name}</Text>
    //             <Image style={styles.arrow} source={arrowIcon} />
    //         </View>
    //     )
    // }

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
    }
})
