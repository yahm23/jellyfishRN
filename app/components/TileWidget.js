import React from 'react';
import { Text, View, Image } from 'react-native';

const TileWidget = (props) => {
    return (
        <View style={styles.widget}>
            <Image style={styles.widgetImage} source={findIcon(props.name) !== null ? findIcon(props.name) : questionMark} />
            <Text style={styles.widgetText}>{props.name}</Text>
            <Image style={styles.arrow} source={arrowIcon} />
        </View>
    )
}

export default TileWidget;