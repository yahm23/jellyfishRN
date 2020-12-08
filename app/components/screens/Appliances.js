import React, { useEffect, useState } from 'react'
import { Animated, View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import brain from '../fakeData/brain';
import SearchBar from '../functional/SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons';

import { AppliancesTileWidget } from '../TileWidget';

export default function Appliances({ navigation }) {
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const HEADER_EXPANDED_HEIGHT = 20
    const HEADER_COLLAPSED_HEIGHT = 0

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    })

    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0.0],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.body}>

            <Animated.View
                style={
                    {
                        transform: [{ translateY: headerHeight }],
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 150
                    }
                }>
                <Animated.Image
                    style={[styles.logo, { marginTop: 20, transform: [{ scale: heroTitleOpacity }] }]}
                    source={JellyLogo} />
                <FontAwesomeIcon icon={faPlus} size={30} color={'white'} style={styles.addIcon} />
                <View style={styles.searchBarContainer}>
                    {console.log("heroTitleOpacity")}
                    {console.log(typeof heroTitleOpacity)}
                    {console.log(heroTitleOpacity)}
                    <SearchBar />
                </View>
            </Animated.View>

            <Animated.ScrollView
                style={{ paddingTop: HEADER_EXPANDED_HEIGHT }}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }], { useNativeDriver: true })
                }
                scrollEventThrottle={16}>

                {brain.map((room, index) => {
                    return (
                        <AppliancesTileWidget name={room.name} key={index} onPress={() => {
                            navigation.navigate('AppliancesStackPage', {
                                name: room.name,
                                data: room.data
                            });
                        }} />
                    )
                })}
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A'
    },
    logo: {
        marginTop: 40,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 30
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    addIcon: {
        position: 'absolute',
        right: 20,
        top: 20
    }
})
