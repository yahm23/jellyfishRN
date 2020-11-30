import React, { useEffect, useState } from 'react'
import { Animated, View, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import { ReportsTileWidget } from '../TileWidget';

export default function Reports({navigation}) {
    const[scrollY, setScrollY] = useState(new Animated.Value(0))

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

    const fakeData = [
        {
            month: "May",
            kwH: 270,
            cost: 300
        },
        {
            month: "June",
            kwH: 260,
            cost: 300
        },
        {
            month: "July",
            kwH: 220,
            cost: 300
        },
        {
            month: "August",
            kwH: 230,
            cost: 300
        },


    ]
    
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
                    }}
            >
                <Animated.Image
                    style={[styles.logo, { marginTop: 20, transform: [{ scale: heroTitleOpacity }] }]}
                    source={JellyLogo} />
                <View style={styles.searchBarContainer}>
                    {console.log("heroTitleOpacity")}
                    {console.log(typeof heroTitleOpacity)}
                    {console.log(heroTitleOpacity)}
                    {/* {console.log(headerHeight)} */}
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

                {fakeData.map((singleMonth, index) => {
                    return (
                        <ReportsTileWidget key={index} month={singleMonth.month} cost={singleMonth.cost} kwH={singleMonth.kwH} onPress={() => {
                            navigation.navigate('ReportsStackPage',{
                                data:'poop'
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
        marginTop: 40
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})
