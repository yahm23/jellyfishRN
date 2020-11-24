import React, {useEffect, useState} from 'react'
import { Animated, View, ScrollView,Dimensions, StyleSheet, Image } from 'react-native';
import brain from '../brain';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png'
import TileWidget from '../TileWidget';

export default function Appliances() {
    const[scrollY, setScrollY] = useState(new Animated.Value(0))
    // const[headerHeight, setHeaderHeight]= useState(300)


    const HEADER_EXPANDED_HEIGHT = 20
    const HEADER_COLLAPSED_HEIGHT = 0
    const { width: SCREEN_WIDTH } = Dimensions.get('screen')


    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    })

    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0.01],
        extrapolate: 'clamp'
    });


    return (
        <View style={styles.body}>
            
            <Animated.View 
            style={
                {transform: [{ translateY: headerHeight }],
                position:"relative",
                top:0,
                left:0,
                right:0,
                height:150
        }} 
            >
                <Animated.Image 
                style={[styles.logo, {marginTop: 28,transform: [{ scale: heroTitleOpacity }] } ] } 
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
                style={{paddingTop: HEADER_EXPANDED_HEIGHT}}
                onScroll={Animated.event(
                    [{ nativeEvent: {
                        contentOffset: {
                            y: scrollY
                        }
                    }
                    }],{useNativeDriver: true}
                )}
                scrollEventThrottle={16}
            >

                <TileWidget name={"room.name"} key={2}/>

                {brain.map((room, index) => {
                    return (
                        <TileWidget name={room.name} key={index}/>
                    )
                })}
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        // height: '100%',
        // position:"absolute",
        // top:0,
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    logo: {
        // marginTop: 80,
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
    },
    widgetContainer: {
        // marginTop: 40
    }
})
