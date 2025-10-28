let seq = [0, 1]
const fibonacci = function(num) {
    if (num >= 0) {
        num = +num;
    } else {
        return "OOPS";
    }
    
    while (seq.length <= num) {
        seq.push(seq[seq.length-1] + seq[seq.length-2]);
    }
    return seq[num];
}
// Do not edit below this line
module.exports = fibonacci;
