const reverseString = function(string) {
    let returnArray = [];
    string.split("").map(char => returnArray.unshift(char));
    return returnArray.join("");
}
    
// Do not edit below this line
module.exports = reverseString;
