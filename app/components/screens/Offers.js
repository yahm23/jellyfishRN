import React, {useState,useRef} from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Child from './Child';
import Carousel  from 'react-native-snap-carousel';

export default function Offers() {
    // const [state, setstate] = useState('initialState')
    const [touchedBar, setTouchedBar] = useState(0)
    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: [<Child touchedBar={touchedBar} setTouchedBar={setTouchedBar}/> ,<Child touchedBar={touchedBar} setTouchedBar={setTouchedBar}/>,<Child touchedBar={touchedBar}/>]
    });

    const carouselRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;

    function renderItem({ item, index }) {
        return (
            <View key={item} style={styles.barChartContainer}>
                <Child item={item} touchedBar={touchedBar} setTouchedBar={setTouchedBar}/>
            </View>
        )
    }
    const renderItem2 = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    }


    return (
        <View style={styles.body}>
            <Text style={styles.paragraph}>Offers// Testing</Text>
            <Text style={styles.paragraph}>{touchedBar}</Text>
            <Carousel
                ref={carouselRef}
                data={state.carouselItems}
                renderItem={renderItem}
                extraData={touchedBar}
                sliderWidth={windowWidth * 0.8}
                itemWidth={windowWidth * 0.8}
                onSnapToItem={(index) => {
                    setState({ ...state, activeSlide: index })
                }}
            /> 
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})