import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../SearchBar';
import JellyLogo from '../../images/brand/Jellyfish-white.png';
import PieChartWithCenteredLabels from '../PieChart';

export default function Dashboard(props) {

    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={JellyLogo} />
            <View style={styles.searchBarContainer}>
                <SearchBar />
                <View style={styles.centerBox}>
                    <PieChartWithCenteredLabels />
                </View>
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
    logo: {
        marginTop: 80,
        height: 35,
        width: 35,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    searchBarContainer: {
        marginTop: 20
    },
    searchBar: {
        borderRadius: 20
    },
    centerBox: {
        marginTop: 40,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})