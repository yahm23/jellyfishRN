import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import BarChart from './BarChart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarChartCarousel(props) {
    
    const ENTRIES1 = [
        {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
        },
        {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        },
        {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
        {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
        },
    ];

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const powerMaxMinCalculator = (data) =>{

    }

    const getSpecificTimeFrameData = (timeframe) => {
        if (props.entireData){
            switch (timeframe) {
                case "Hour":
                return props.entireData.hours
                
                case "Day":
                return props.entireData.days
                
                case "Month":
                return props.entireData.months
                
                case "Year":
                return props.entireData.years
            }
        }
    }

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={styles.item}>
            <ParallaxImage
              source={{uri: item.illustration}}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              {...parallaxProps}
            />
            {/* <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text> */}
          </View>
        );
      };
      
    return (
        <View style={styles.body}>

                <Text>{props.timeFrame}</Text>
                <View style={styles.container}>
                <BarChart specificTimeFrameData = {getSpecificTimeFrameData(props.timeFrame)}/>
                    {/* <TouchableOpacity onPress={goForward}>
                        <Text>go to next slide</Text>
                    </TouchableOpacity> */}
                    {/* <Carousel
                        ref={carouselRef}
                        sliderWidth={windowWidth}
                        sliderHeight={windowWidth}
                        itemWidth={windowWidth - 60}
                        data={entries}
                        renderItem={renderItem}
                        // hasParallaxImages={true}
                    /> */}
                </View>

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
    },
    item: {
        width: windowWidth*0.8,
        alignSelf:'center',
        height: windowHeight*0.35,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
})
