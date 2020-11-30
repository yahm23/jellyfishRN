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
            total_kwH: 270,
            total_cost: 300,
            days:[
                {kwh:12,cost:10},
                {kwh:6,cost:5},
                {kwh:18,cost:15},
                {kwh:24,cost:20},
            ]
        },
        {
            month: "June",
            total_kwH: 260,
            total_cost: 300,
            days:[
                {kwh:12,cost:10},
                {kwh:6,cost:5},
                {kwh:18,cost:15},
                {kwh:24,cost:20},
            ]
        },
        {
            month: "July",
            total_kwH: 220,
            total_cost: 300,
            days:[
                {kwh:12,cost:10},
                {kwh:6,cost:5},
                {kwh:18,cost:15},
                {kwh:24,cost:20},
            ]
        },
        {
            month: "August",
            total_kwH: 230,
            total_cost: 300,
            days:[
                {kwh:12,cost:10},
                {kwh:6,cost:5},
                {kwh:18,cost:15},
                {kwh:24,cost:20},
            ]
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
                        <ReportsTileWidget key={index} month={singleMonth.month} cost={singleMonth.total_cost} kwH={singleMonth.total_kwH} onPress={() => {
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
