import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video';
import loadingVideo from '../videos/loadingJellyfish.mp4';

export default function LoadingScreen() {

    return (
        <View style = {styles.body}>
            <Video 
            style={styles.video}
            source={loadingVideo}
            repeat={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent:'center',
        alignContent: 'center'
    },
    text:{
        width: '100%',
        color:'white',
        fontSize: 16,
        textAlign: 'center',
    },
    video: {
        height: 120,
        width: '100%'
    }
})
