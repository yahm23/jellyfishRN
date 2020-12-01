import React, { useState } from 'react';
import { Text, View, SafeAreaView, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {

    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: ['1', '2', '3', '4']
    });

    function renderItem({ item, index }) {
        return (
            <View style={{backgroundColor: '#1A1A1A', height: '100%', width: '100%'}}>
                <Text style={{color: 'black'}}>{item}</Text>
            </View>
        )
    }

    function getPagination() {
        const { carouselItems, activeSlide } = state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                containerStyle={{ backgroundColor: 'transparent', position: 'absolute', bottom: 0, left: 0, right: 0}}
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