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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import CarouselCustom from './CarouselCustom';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarChartCarousel(props) {
    const [entireDataGrouped, setEntireDataGroup] = useState(null)

    useEffect(() => {
        setEntireData()
        
        // setChunkifiedArray()
    }, [props]);

    const goForward = () => {
        console.log('moving');
        if(indexShown===maxIndex -1 ){
            null
        }else if(indexShown < maxIndex -1 ){
            setIndex(indexShown+1)
            // carouselRef.current.snapToNext();
        }else{
            setIndex(0)
        }
    };
    const goBackwards = () => {
        if(indexShown!=0){
            setIndex(indexShown-1)
            carouselRef.current.snapToNext();
        }
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

    async function setEntireData(){
        await setEntireDataGroup(chunkArrayInGroups(props.entireData,5))
    }
    
    async function setChunkifiedArray (){
        var grouped = entireDataGrouped
        var firstEntry = grouped
        var test =[1,2,3];

        // console.log(firstEntry);
        return test.map((value,index)=>{
            return <Text>NEW TRIAL</Text>
            // return <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {entireDataGrouped[index]}/>
        })
        return grouped.map((value,index)=>{
            return <Text>NEW TRIAL</Text>
            // return <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {entireDataGrouped[index]}/>
        })

    }
    
    function renderItem({ item, index }) {
        return (
            <View style={styles.item}>
                {item}
            </View>
        )
    }

    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: [<Text>NEW TRIAL</Text>]
    });


      
    return (
        <View style={styles.body}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Arrow} onPress={goBackwards}>
                        <FontAwesomeIcon style={[styles.Arrow, styles.backArrow]} icon={faChevronRight} size={25} color={'white'} />
                    </TouchableOpacity>
                    {entireDataGrouped?
                    
                        // <View>
                        //     <Carousel
                        //         data={state.carouselItems}
                        //         renderItem={renderItem}
                        //         inactiveSlideScale={1}
                        //         sliderWidth={windowWidth}
                        //         itemWidth={windowWidth}
                        //         onSnapToItem={(index) => setState({ ...state, activeSlide: index })}
                        //     />
                        // </View>
                         
                        <CarouselCustom displayedArray={entireDataGrouped}/>
                        :
                        <Text>NULL tern</Text>
                    } 
                    <TouchableOpacity style={styles.Arrow} onPress={goForward}>
                        <FontAwesomeIcon  icon={faChevronRight} size={25} color={'white'} />
                    </TouchableOpacity>
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
