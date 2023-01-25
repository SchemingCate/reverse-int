module.exports = function reverse(n) {
    const stringNumber = n.toString();
    let reversedStringNumber = "";
    for (let i = stringNumber.length - 1; i >= 0; i--) {
        if (isNaN(stringNumber[i])) {
            continue;
        }
        reversedStringNumber += stringNumber[i];
    }
    return Number(reversedStringNumber);
};
