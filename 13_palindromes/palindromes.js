const palindromes = function (str) {
    lettersOnly =  str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    return lettersOnly === lettersOnly.split("").reverse().join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
