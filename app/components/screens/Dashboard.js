import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png';
import DynamicPieChart from '../DynamicPieChart';
import brain from '../brain';

export default function Dashboard(props) {

    const pieDataArr = brain.map((room, index) => {
        const key = Object.keys(room.data);
        let res = 0;

        for (let i = 0; i < key.length; i++) {
            res += room.data[key[i]].energy_consumption;
        }

        return { name: room.name, value: res }
    })

    return (
        <View style={styles.body}>
            <View style={styles.topBox}>
                <Image style={styles.logo} source={JellyLogo} />
                <View style={styles.searchBarContainer}>
                    <SearchBar />
                </View>
            </View>
            <View style={styles.centerBox}>
                <DynamicPieChart pieData={pieDataArr}/>
            </View>
        </View>
    )
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
    logo: {
        marginTop: 40,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 40
    },
    searchBar: {
        borderRadius: 20
    },
    centerBox: {
        marginBottom: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})