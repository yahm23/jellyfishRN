export const CapitaliseString = (string) =>{
    var capitalisedString = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalisedString;
}
export const GetOrdinalSuffix = (number) => {
    if (number > 3 && number < 21) return 'th';
    switch (number % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

export const ChunkArrayIntoGroups = (inputArray,size) => {
    let returnArray = [];
    for (var i = 0; i < inputArray.length; i += size) {
        returnArray.push(inputArray.slice(i, i + size));
    }
    return returnArray
};


// export default CapitaliseString;