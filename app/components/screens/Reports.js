import React, { useState, useEffect, useRef } from 'react'
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import SearchBar from '../functional/SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png';
import reportsData from '../fakeData/reportsData';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BarChart from '../functional/Barchart';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/pro-solid-svg-icons';

const windowWidth = Dimensions.get('window').width;
const times = ['hours', 'days', 'months', 'years'];

export default function Reports() {
    const [timeFrame, setTimeFrame] = useState('days');
    const [chunkIndex, setChunkIndex] = useState(0);
    const [specificIndex,setSpecificIndex] = useState(0);
    const [touchedBar, setTouchedBar] = useState([0,0])
   // Update carousel items state when new button is pressed
    const [state, setState] = useState({
        activeSlide: 0,
        carouselItems: createBarchart(reportsData[timeFrame])
    });
    const carouselRef = useRef(null);

    useEffect(() => {
    }, [state])

    const changeSpecificIndex=(value)=>{
        // handleTimePress(timeFrame);
        setSpecificIndex(value);
    }

    const selectBar = (value) => {
        setTouchedBar(value)
    }
    // Split and export data as chunks of five
    function createBarchart(arr) {
        const size = 5;
        let myArray = [];
        if (arr && size) {
            for (var i = 0; i < arr.length; i += size) {
                myArray.push(arr.slice(i, i + size));
            }
            return myArray.map((arr,index) => {
                let i =index
                // console.log(i); 
                return <BarChart 
                            testIndex={i}
                            touchedBar={touchedBar}
                            setTouchedBar={setTouchedBar}
                            key={timeFrame}
                            specificTimeFrameData={arr}
                            handleTimePress={()=>setState({...state,useless:0})}
                            timeFrame={timeFrame}

                            
                            />
            })
        }
    }

 

    function renderItem({ item, index }) {
        return (
            <View style={styles.barChartContainer}>
                {item}
            </View>
        )
    }

    // Replace carousel data when timeframe has been selected
    const handleTimePress = async (value) => {
        if(timeFrame!=value){
            setTimeFrame(value);
            setTouchedBar([0,0])
            setState({
                activeSlide: 0,
                carouselItems: createBarchart(reportsData[value])
            })
        }else{
            null
        }
        // setTouchedBar([0,0])
        // timeFrame!=value? setTouchedBar([0,0]): null
    }

    const DotsLabels = () => {
        return (
            <View style={styles.dotsContainer}>
                {times.map((value,index) => {
                    let active;
                    value === timeFrame ? active = true : active = false
                    return (
                        <TouchableOpacity key={index} onPress={() => handleTimePress(value)} key={value}>
                            <View style={[styles.dots, active ? styles.activeDot : null]} />
                            <Text style={[styles.label, active ? styles.activeLabel : null]}>{CapitaliseString(value)}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    const CapitaliseString = (string) =>{
        var capitalisedString = string.charAt(0).toUpperCase() + string.slice(1)
        return capitalisedString;
    }

    const goBackwards = () =>{
        carouselRef.current.snapToPrev();
    }
    
    const goForwards = () =>{
        carouselRef.current.snapToNext();
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
                <Text style={{color:'white'}}>touchedBar {touchedBar[0]}+ {touchedBar[1]}</Text>
                <Text style={{color:'white'}}>activeslide {state.activeSlide}</Text>
                <Text style={{color:'white'}}>timeframe {timeFrame}</Text>
                <View style={styles.centerBox}>

                    <TouchableOpacity style={styles.Arrow} onPress={goBackwards}>
                        <FontAwesomeIcon style={[styles.Arrow, styles.backArrow]} icon={faChevronRight} size={25} color={'white'} />
                    </TouchableOpacity>

                    <View key={timeFrame}>
                       <Carousel
                        ref={carouselRef}
                        data={state.carouselItems}
                        renderItem={renderItem}
                        inactiveSlideScale={1}
                        sliderWidth={windowWidth * 0.8}
                        itemWidth={windowWidth * 0.8}
                        onSnapToItem={(index) => {
                            setTouchedBar({...touchedBar})
                            setState({ ...state, activeSlide: index })
                        }}
                    /> 
                    </View>
                    

                    <TouchableOpacity style={styles.Arrow} onPress={goForwards}>
                        <FontAwesomeIcon  icon={faChevronRight} size={25} color={'white'} />
                    </TouchableOpacity>

                </View>
                <View style={styles.dotsPosition}><DotsLabels /></View>
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
        height: 120
    },
    centerBox: {
        marginTop: 15,
        flexDirection:'row',
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        marginTop: 25,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 25
    },
    paginationBottomContainer: {
        backgroundColor: 'transparent',
        height: 70
    },
    barChartContainer: {
        marginTop: 25,
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor:'yellow',
        width:windowWidth*0.8
    },
    dotsPosition: {
        width: '100%',
        marginTop: 20,
        flex: 0,
        alignItems: 'center'
    },
    dotsContainer: {
        paddingVertical: 10,
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        textAlign: 'center',
    },
    dots: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        width: 10,
        height: 10,
        borderRadius: 500,
    },
    activeDot: {
        backgroundColor: 'white'
    },
    label: {
        paddingTop: 15,
        fontFamily: 'GothamRounded-Medium',
        color: 'white'
    },
    activeLabel: {
        color: 'white'
    },
    Arrow:{
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        // height: windowHeight*0.35,
    },
    backArrow:{
        transform: [{ rotate: '180deg'}]
    }
})