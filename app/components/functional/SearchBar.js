import React, { useState } from 'react'
import { TextInput, View, Image, StyleSheet } from 'react-native';
import searchIcon from '../../images/search.png';

export default function SearchBar() {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBody}>
                <Image source={searchIcon} style={styles.searchIcon} />
                <TextInput style={styles.TextInput} value={search} onChangeText={text => setSearch(text)} placeholder='Search'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        alignItems: 'center'
    },
    searchBody: {
        backgroundColor: '#272727',
        paddingTop: (Platform.OS === 'ios') ? 15 : 0,
        paddingBottom: (Platform.OS === 'ios') ? 15 : 0,
        width: '90%',
        borderRadius: 12,
        justifyContent: 'center'
    },
    searchIcon: {
        position: 'absolute',
        left: 16,
        height: 20,
        width: 20,
        resizeMode: 'contain',
        opacity: 0.5
    },
    TextInput: {
        left: 36,
        width: '80%',
        color: 'white',
        opacity: 0.5,
        fontSize: 16,
        marginLeft: 16
    }
})