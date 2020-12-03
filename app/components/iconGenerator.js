import React from 'react';
const imagePath = '../images/roomIcons/';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/pro-duotone-svg-icons';

const findIcon = (name) => {
    const nameLowerCase = name.toLowerCase();

    if (nameLowerCase.includes('bedroom')) {
        return <FontAwesomeIcon icon={faCoffee} color={'white'}/>
    }
    else if (nameLowerCase.includes('kitchen')) {
        return <FontAwesomeIcon icon={faCoffee} color={'white'}/>
    }
    else if (nameLowerCase.includes('office')) {
        return <FontAwesomeIcon icon={faCoffee} color={'white'}/>
    }
    else {
        return null;
    }
}

module.exports = findIcon;