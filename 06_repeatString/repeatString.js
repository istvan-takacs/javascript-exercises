const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let originalString = string;
    let i = 1;
    while (i < num) {
        string += originalString;
        i++;
    }
    return num !== 0 ? string : "";
};

// Do not edit below this line
module.exports = repeatString;
