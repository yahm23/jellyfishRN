import React, { useState } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png';
import DynamicPieChart from '../DynamicPieChart';
import brain from '../brain';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Dashboard(props) {

    const pieDataArr = brain.map((room, index) => {
        const key = Object.keys(room.data);
        let res = 0;

        for (let i = 0; i < key.length; i++) {
            res += room.data[key[i]].energy_consumption;
        }

        return { name: room.name, value: res }
    })

    const Piechart = () => {
        return (
            <View style={styles.body}>
                <View style={styles.topBox}>
                    <Image style={styles.logo} source={JellyLogo} />
                    <View style={styles.searchBarContainer}>
                        <SearchBar />
                    </View>
                </View>
                <View style={styles.centerBox}>
                    <DynamicPieChart pieData={pieDataArr} />
                </View>
            </View>
        )
    }

    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: ['1', '2', '3', '4']
    });

    function renderItem({ item, index }) {
        return (
            <View style={{ backgroundColor: '#1A1A1A', height: '100%', width: '100%' }}>
                <Text style={{ color: 'black' }}>{item}</Text>
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
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }
    return (
        <View>
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
    );
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A'
    },
    topBox: {
        height: 120
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
    searchBar: {
        borderRadius: 20
    },
    centerBox: {
        marginBottom: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})