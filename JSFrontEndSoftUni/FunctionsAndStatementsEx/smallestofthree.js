function smallestOfThree(num1, num2, num3){
    let smallest = Number.MAX_SAFE_INTEGER;
    if(num1 < smallest) smallest = num1;
    if(num2 < smallest) smallest = num2;
    if(num3 < smallest) smallest = num3;
    console.log(smallest);
}
// smallestOfThree(2, 5, 3);
// smallestOfThree(600, 324, 123);
// smallestOfThree(25, 21, 4);
// smallestOfThree(2, 2, 2);