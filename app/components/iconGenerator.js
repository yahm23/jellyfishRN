const imagePath = '../images/roomIcons/';

const findIcon = (name) => {
    const nameLowerCase = name.toLowerCase();

    if (nameLowerCase.includes('bedroom')) {
        return require(`${imagePath}bed-front.png`);
    }
    else if (nameLowerCase.includes('kitchen')) {
        return require(`${imagePath}oven.png`);
    }
    else if (nameLowerCase.includes('office')) {
        return require(`${imagePath}office-chair.png`);
    }
    else {
        return null;
    }
}

module.exports = findIcon;