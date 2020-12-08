import React, { useState } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet, YellowBox } from 'react-native';
// import SearchBar from '../../SearchBar';
import SearchBar from '../SearchBar'
import JellyLogo from '../../../images/brand/Jellyfish-white.png';
// import DynamicPieChart from '../DynamicPieChart';
// import brain from '../fakeData/brain';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BarChart from './BarChart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarScreenScreen(props) {



    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: [
            <BarChart/>,
            <BarChart/>,
            <BarChart/>
        ]
    });

    function renderItem({ item, index }) {
        return (
            <View style={styles.centerBox}>
                {item}
            </View>
        )
    }

    function getPagination() {
        const { carouselItems, activeSlide } = state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'transparent', position: 'absolute', bottom: 0, left: 0, right: 0 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.4}
            />
        );
    }
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.topBox}>
                    <Image style={styles.logo} source={JellyLogo} />
                    <View style={styles.searchBarContainer}>
                        <SearchBar />
                    </View>
                </View>
                <Carousel
                    data={state.carouselItems}
                    renderItem={renderItem}
                    inactiveSlideScale={1}
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    onSnapToItem={(index) => setState({ ...state, activeSlide: index })}
                />
                {getPagination()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    topBox: {
        height: 180
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
    searchBar: {
        borderRadius: 20
    },
    centerBox: {
        flex: 1
    }
})