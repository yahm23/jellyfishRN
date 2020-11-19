import React, {useEffect} from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login(props) {
    // useEffect(() => {
    //     props.navigation.navigate("Screen1")
    // }, [])
    return (
        <View>
            <Text>Login</Text>
            <Button title="poop"
                style={{alignItems: "center",
                backgroundColor: "#DDDDDD",
                padding: 10}}
                onPress={()=>
                    {
                    console.log('POOP')
                    props.navigation.navigate("Screen1")}
                }
            >

            </Button>

            
        </View>
    )
}