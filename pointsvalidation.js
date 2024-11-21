function solve(input) {
    const [x1, y1, x2, y2] = input;

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValidDistance(x1, y1, x2, y2) {
        const distance = calculateDistance(x1, y1, x2, y2);
        return Number.isInteger(distance);
    }

    function printResult(x1, y1, x2, y2) {
        if (isValidDistance(x1, y1, x2, y2)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);
}
// solve([3, 0, 0, 4]);
// solve([2, 1, 1, 1]);
