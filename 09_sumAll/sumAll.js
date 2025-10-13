const sumAll = function(intOne, intTwo) {
    if (!Number.isInteger(intOne) || (!Number.isInteger(intTwo))) {
        return "ERROR"
    }
    if (intOne < 0 || intTwo < 0) {
        return "ERROR"
    }
    let minInt = Math.min(intOne, intTwo);
    let maxInt = Math.max(intOne, intTwo);
    const arr = []
    for (let i = minInt; i < maxInt + 1; i++) {
        arr.push(i)
    }
    return arr.reduce((acc, value) => acc + value, 0)
};

// Do not edit below this line
module.exports = sumAll;
