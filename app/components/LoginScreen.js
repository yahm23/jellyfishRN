import React, { useState } from 'react'
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from '../images/brand/full.png';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingScreen from './LoadingScreen';
// const background = { uri: "../../" };
import background from '../images/jellybck.png';

// Immediately reload the React Native Bundle
export default function LoginScreen({ navigation }) {

    const [isLoading, setIsLoading] = useState(false);

    const LogIn = () => {
        setIsLoading(true);
        AsyncStorage.setItem('LoggedIn', "true", () => {
            setTimeout(() => {
                navigation.navigate('AppContainer');
                setIsLoading(false);
            }, 1000);
        });
    }

    return (
        <View>
            {isLoading ?
                <LoadingScreen /> :
                <View style={styles.body}>
                    <ImageBackground imageStyle={{opacity:0.1}} source={background} style={styles.image}>
                        
                    
                        <Image source={logo} style={styles.logo} />
                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>Understand your</Text>
                            <Text style={styles.header}>home energy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Real-time, simple trend insights.
                        </Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} title='Get Started' onPress={() => LogIn()}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                            <Text style={styles.paragraph}>Need to order your Jellyfish kit?</Text>
                        </View>
                    </ImageBackground>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        
        width: '100%',
        backgroundColor: '#1A1A1A',
    }, 
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    logo: {
        marginTop: 120,
        height: 50,
        width: 'auto',
        resizeMode: 'contain',
    },
    headerContainer: {
        marginTop: 120
    },
    header: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 20,
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: (Platform.OS === 'ios') ? 50 : 0,
        height: 80,
        width: '100%',
        marginBottom: 20
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: '92%',
        borderRadius: 10,
        backgroundColor: "#F70B5E"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
})