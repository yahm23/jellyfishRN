import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../SearchBar';
import PieChartWithCenteredLabels from '../PieChart';

export default function Dashboard(props) {

    return (
        <View style={styles.body}>
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
    searchBarContainer: {
        marginTop: 100
    },
    searchBar: {
        borderRadius: 20
    },
    centerBox: {
        marginTop: 100,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})