const isEven = (num) => {
    const div = num % 2;
    return div === 0;
}
const isOdd = (num) => {
    const div = num % 2;
    return div !== 0;
}

const exportedPart = {
    isEven,
    isOdd
}

module.exports = exportedPart;

