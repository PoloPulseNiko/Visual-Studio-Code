function solve(number) {
    let numStr = number.toString();
    function calculateAverage(numStr) {
        let sum = 0;
        for (let char of numStr) {
            sum += Number(char);
        }
        return sum / numStr.length;
    }
    while (calculateAverage(numStr) <= 5) {
        numStr += '9';
    }
    return numStr;
}

// console.log(solve(101));
// console.log(solve(5835));
