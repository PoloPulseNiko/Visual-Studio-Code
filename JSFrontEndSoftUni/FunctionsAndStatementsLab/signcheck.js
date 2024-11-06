function signCheck(numOne, numTwo, numThree) {
    const negatives = [numOne, numTwo, numThree].filter(num => num < 0).length;
    console.log(negatives % 2 === 0 ? "Positive" : "Negative");
}
// signCheck(5, 12, -15);
// signCheck(-6, -12, 14);
// signCheck(-1, -2, -3);
// signCheck(-5, 1, 1);