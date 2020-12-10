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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function BarChartCarousel(props) {


    const [allData, setAllData] = useState(null);
    const [entireFrame, setEntireFrame] = useState(null);
    const [indexShown, setIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(null)
    const carouselRef = useRef(null);
    
    useEffect(() => {
        // if(props.entireData && props.timeFrame){
            var array = getSpecificTimeFrameData(props.entireData);
            var changedArray = chunkArrayInGroups(array,5)
            setEntireFrame(changedArray)
            console.log(array);
            
            // setMaxIndex(changedArray.length)
            // const singleArr = changedArray;
            // setDisplayed(singleArr); 
            setIndex(0)
        // }
       
        console.log('Index is currently at ' + indexShown);
    }, [props]);

    const goForward = () => {
        console.log('moving');
        if(indexShown===maxIndex -1 ){
            null
        }else if(indexShown < maxIndex -1 ){
            setIndex(indexShown+1)
            carouselRef.current.snapToNext();
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

    
    function renderItem({ item, index }) {
        return (
            <View>
                {item}
            </View>
        )
    }

    const getChunkifiedArray = () => {
        // var array = getSpecificTimeFrameData(props.timeFrame);
        // var changedArray = chunkArrayInGroups(array,5)
        // console.log('changedArray:');
        // console.log(changedArray);
        if(props.entireData && entireFrame){
            return chunkArrayInGroups(getSpecificTimeFrameData(props.timeFrame),5).map((value,index)=>{
                return <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {entireFrame[index]}/>

            })
        }
        // var test =[1,2,3];

        // return test.map(()=>{
        //     return <Text>POOPOPO</Text>
        // })
    }

    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: 
            //  <Text>poop</Text>,
            //  <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {props.timeFrame? getSpecificTimeFrameData(props.timeFrame).slice(0,5):null}/>
            getChunkifiedArray()
        
            // ()=>{
            //     var array = getSpecificTimeFrameData(props.timeFrame);
            //     var changedArray = chunkArrayInGroups(array,5)
            //     console.log(changedArray);
            //     return changedArray.map((value,index)=>{
            //         return <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {entireFrame[index]}/>

            //     })
            // }
            
        
    });


    // const renderItem = ({item, index}, parallaxProps) => {
    //     return (
    //       <View style={styles.item}>
    //         {props.timeFrame?
    //             <BarChart timeFrameName={props.timeFrame} specificTimeFrameData = {displayedFrame[indexShown]}/>
    //             :
    //             null
    //         }
    //       </View>
    //     );
    //   };
      
    return (
        <View style={styles.body}>

                {/* <Text>{props.timeFrame}</Text> */}
                    
                    
                <View style={styles.container}>
                    <TouchableOpacity style={styles.Arrow} onPress={goBackwards}>
                        <FontAwesomeIcon style={[styles.Arrow, styles.backArrow]} icon={faChevronRight} size={25} color={'white'} />
                    </TouchableOpacity>

                    {entireFrame?
                        // <View style={{width:'80%'}}>
                        <View style={{}}>

                            <Carousel
                            ref={carouselRef}
                            sliderWidth={windowWidth*0.8}
                            sliderHeight={windowWidth}
                            itemWidth={windowWidth*0.8}
                            data={state.carouselItems}
                            // data={entireFrame}
                            renderItem={renderItem}
                            onSnapToItem={(index) => setState({ ...state, activeSlide: index })}
                            // hasParallaxImages={true}
                            />
                        </View>

                        :
                        null
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
