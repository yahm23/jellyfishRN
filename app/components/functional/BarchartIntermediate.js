import React, { useState } from 'react'
import { View,Text } from 'react-native'
import Barchart from './Barchart'

export default function BarchartIntermediate(props) {
    const [arr,setArr] = useState(props.arr)
    const [touchedBar, setTouchedBar] = useState([0,0])

    useEffect(() => {
        setArr(props.arr)
        console.log('poop');
    }, [props])

    function createBarchart(arr) {
        const size = 5;
        let myArray = [];
        if (arr && size) {
            for (var i = 0; i < arr.length; i += size) {
                myArray.push(arr.slice(i, i + size));
            }
            return myArray.map((arr,index) => {
                let i =index
                console.log(i); 
                return <Text>Hello</Text>
                //  <BarChart 
                //             testIndex={i}
                //             touchedBar={touchedBar}
                //             setTouchedBar={setTouchedBar}
                //             key={touchedBar}
                //             specificTimeFrameData={arr}
                //             // handleTimePress={()=>setSpecificIndex(1)}
                //             // timeFrame={timeFrame}
                //             // ref={carouselRef.current.snapToNext()}

                //             // activeSlide={0} 
                //             // setSpecificIndex={changeSpecificIndex}
                //             // specificIndex={specificIndex}
                //             // chunkIndex={chunkIndex} 
                //             />
            })
        }
    }
    return createBarchart(props.arr)
    
}
