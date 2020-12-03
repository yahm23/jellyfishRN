import React from 'react';
const imagePath = '../images/roomIcons/';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBed, faFaucetDrip, faChairOffice, faTvRetro,
    faLamp, faLaptop, faMobileAndroid, faGameConsoleHandheld, faOven,
    faMicrowave, faRefrigerator, faFanTable
} from '@fortawesome/pro-duotone-svg-icons';

const findIcon = (name) => {
    const nameLowerCase = name.toLowerCase();
    const size = 30;

    if (nameLowerCase.includes('bedroom')) {
        return <FontAwesomeIcon icon={faBed} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('kitchen')) {
        return <FontAwesomeIcon icon={faFaucetDrip} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('office')) {
        return <FontAwesomeIcon icon={faChairOffice} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('tv')) {
        return <FontAwesomeIcon icon={faTvRetro} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('lamp')) {
        return <FontAwesomeIcon icon={faLamp} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('laptop') || nameLowerCase.includes('computer')) {
        return <FontAwesomeIcon icon={faLaptop} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('phone')) {
        return <FontAwesomeIcon icon={faMobileAndroid} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('ps5')) {
        return <FontAwesomeIcon icon={faGameConsoleHandheld} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('oven')) {
        return <FontAwesomeIcon icon={faOven} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('microwave')) {
        return <FontAwesomeIcon icon={faMicrowave} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('fridge')) {
        return <FontAwesomeIcon icon={faRefrigerator} size={size} color={'white'} />
    }
    else if (nameLowerCase.includes('fan')) {
        return <FontAwesomeIcon icon={faFanTable} size={size} color={'white'} />
    }
    else {
        return null;
    }
}

module.exports = findIcon;