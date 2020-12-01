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
                { date:'1/05/20', kwh:12,cost:10},
                { date:'2/05/20', kwh:6,cost:5},
                { date:'3/05/20', kwh:18,cost:15},
                { date:'4/05/20', kwh:24,cost:20},
                { date:'5/05/20', kwh:24,cost:20},
                { date:'6/05/20', kwh:18,cost:15},
                { date:'7/05/20', kwh:24,cost:20},
                { date:'8/05/20', kwh:18,cost:15},
                { date:'9/05/20', kwh:13,cost:20},
                { date:'10/05/20', kwh:2,cost:20},
                { date:'11/05/20', kwh:5,cost:20},
                { date:'12/05/20', kwh:21,cost:20},
                { date:'13/05/20', kwh:23,cost:20},
                { date:'14/05/20', kwh:16,cost:20},
                { date:'15/05/20', kwh:18,cost:20},
                { date:'16/05/20', kwh:12,cost:20},
                { date:'17/05/20', kwh:21,cost:20},
                { date:'18/05/20', kwh:4,cost:20},
                { date:'19/05/20', kwh:5,cost:20},
                { date:'21/05/20', kwh:13,cost:20},
                { date:'22/05/20', kwh:15,cost:20},
                { date:'23/05/20', kwh:23,cost:20},
            ]
        },
        {
            month: "June",
            total_kwH: 260,
            total_cost: 300,
            days:[
                { date:'1/06/20' ,kwh:12,cost:10},
                { date:'1/06/20' ,kwh:6,cost:5},
                { date:'1/06/20' ,kwh:18,cost:15},
                { date:'1/06/20' ,kwh:24,cost:20},
            ]
        },
        {
            month: "July",
            total_kwH: 220,
            total_cost: 300,
            days:[
                { date:'1/06/20' ,kwh:12,cost:10},
                { date:'1/06/20' ,kwh:6,cost:5},
                { date:'1/06/20' ,kwh:18,cost:15},
                { date:'1/06/20' ,kwh:24,cost:20},
            ]
        },
        {
            month: "August",
            total_kwH: 230,
            total_cost: 300,
            days:[
                { date:'1/06/20' ,kwh:12,cost:10},
                { date:'1/06/20' ,kwh:6,cost:5},
                { date:'1/06/20' ,kwh:18,cost:15},
                { date:'1/06/20' ,kwh:24,cost:20},
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
                                month: singleMonth.month,
                                days: singleMonth.days
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
