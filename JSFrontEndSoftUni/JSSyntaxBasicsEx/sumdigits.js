function solve(numbers){
    let sum = 0;
    let numstr = numbers.toString();
    for (let i = 0; i < numstr.length; i++) {
        sum += parseInt(numstr[i]); // Convert each element to an integer and add to sum
    }
    console.log(sum);
}
//solve(245678);
//solve(97561);
//solve(543);