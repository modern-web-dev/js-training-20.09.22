let myNumbers = [1, 4, 45, 78, 20];
myNumbers.push(33); // mutable
myNumbers = [...myNumbers, 33]; // immutable

// map, filter, reduce
const sum = myNumbers
    .map(addValueOf(2))
    .filter(onlyGreaterThanTen)
    .reduce(calculateSum, 0);

console.log(sum);

function addValueOf(valueToAdd) {
    return function (value) {
        return value + valueToAdd;
    }
}

function addOne(value) {
    return value + 1;
}

function onlyGreaterThanTen(value) {
    return value > 10;
}

function calculateSum(sum, currentValue) {
    return sum + currentValue;
}

// myNumbers.forEach(
//     (myNumber, index) => console.log(`${index}: ${myNumber}`)
// );

