import React, { useEffect, useState } from 'react'
import { Animated, View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import brain from '../brain';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import TileWidget from '../TileWidget';

export default function Appliances() {
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    const HEADER_EXPANDED_HEIGHT = 100
    const HEADER_COLLAPSED_HEIGHT = 10
    const { width: SCREEN_WIDTH } = Dimensions.get('screen')
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.body}>

            <Animated.View
                style={{ transform: [{ translateY: headerHeight }], position: 'absolute', top: 0, left: 0 }}
            >
                <Image style={styles.logo} source={JellyLogo} />
                <View style={styles.searchBarContainer}>
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
                    }], { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >


                {brain.map((room, index) => {
                    return (
                        <TileWidget name={room.name} key={index} />
                    )
                })}
            </Animated.ScrollView>
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
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 20
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})
