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

export const GetMonthName= (monthNum) =>{
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

    var selectedMonthName = months[monthNum-1];
    return selectedMonthName;
}

// export default CapitaliseString;