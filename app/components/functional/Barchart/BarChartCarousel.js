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
;

    const [displayedFrame, setDisplayed] = useState(null);
    const [entireFrame, setEntireFrame] = useState(null);
    const [indexShown, setIndex] = useState(0)
    const carouselRef = useRef(null);
    
    useEffect(() => {
        if(props.entireData && props.timeFrame){
            var array = getSpecificTimeFrameData(props.timeFrame);
            var changedArray = chunkArrayInGroups(array,5)
            
            setEntireFrame(changedArray)
            console.log(changedArray);

            const singleArr = changedArray;
            setDisplayed(singleArr); 

        }

    }, [props]);

    const goForward = () => {
        console.log('moving');
        setIndex(indexShown+1)
        carouselRef.current.snapToNext();
    };

    
    //USE THIS
    function chunkArrayInGroups(arr, size) {
        var myArray = [];
        if(arr&& size){
            for(var i = 0; i < arr.length; i += size) {
            myArray.push(arr.slice(i, i+size));
            }
            return myArray;
        }
      }

    const calculateSlideNumber = (input) => {
        var ans;
        ans = input/5
        return Math.ceil(ans)
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

    const shiftFrame = (data) => {
        var dataSlides = calculateSlideNumber(data.length())
    }

    

    const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={styles.item}>
            {props.timeFrame?
                <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {displayedFrame[indexShown]}/>
                :
                null
            }
          </View>
        );
      };
      
    return (
        <View style={styles.body}>

                <Text>{props.timeFrame}</Text>
                <View style={styles.container}>
                    <TouchableOpacity onPress={goForward}>
                        <Text>go to next slide</Text>
                    </TouchableOpacity>
                    {entireFrame?
                    
                        <Carousel
                        ref={carouselRef}
                        sliderWidth={windowWidth}
                        sliderHeight={windowWidth}
                        itemWidth={windowWidth - 60}
                        data={entireFrame}
                        renderItem={renderItem}
                        // hasParallaxImages={true}
                        />
                        :
                        null
                    }
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
