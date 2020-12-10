import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Dimensions , StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CarouselCustom(props) {
    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: props.displayedArray
    });

    function renderItem({ item, index }) {
        return (
            <View style={styles.item}>
                {item}
            </View>
        )
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
        </View>
    )
}



const styles = StyleSheet.create({
    body:{ 
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    container: {
        flex: 1,
        flexDirection:'row'
    },
    item: {
        width: windowWidth*0.8,
        flex:0,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        height: windowHeight*0.35,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    Arrow:{
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        height: windowHeight*0.35,
    },
    backArrow:{
        transform: [{ rotate: '180deg'}]
    }


})
