import React, { useState } from 'react'
import { View,Text } from 'react-native'
import Barchart from './Barchart'

export default function BarchartIntermediate(data,activeSlide) {
    const [arr,setArr] = useState(props.arr)
    const [touchedBar, setTouchedBar] = useState([0,0])

    useEffect(() => {
        setArr(props.arr)
        // console.log('poop');
    }, [props])

    function createBarchart(arr) {
        if (arr) {
            var chunkedArray = ChunkArrayIntoGroups(arr,5)
            return chunkedArray.map((arr,index) => {
                let i =index
                return <BarChart 
                            testIndex={i}
                            touchedBar={touchedBar}
                            setTouchedBar={setTouchedBar}
                            key={timeFrame}
                            specificTimeFrameData={arr}
                            // handleTimePress={()=>setState({...state})}
                            timeFrame={timeFrame}
                            
                            />
            })
        }
    }
    return createBarchart(props.data)

    
}
