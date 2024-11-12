function validityChecker(num1, num2, num3, num4){
    const result1 = Math.sqrt((Math.pow(num1, 2) + Math.pow(num2, 2)))
    const result2 = Math.sqrt((Math.pow(num3, 2) + Math.pow(num4, 2)));
    const result3 = Math.sqrt((Math.pow((num3 - num1), 2) + Math.pow((num4 - num2), 2)));
    if(Number.isInteger(result1)){
        console.log(`{${num1}, ${num2}} to {0, 0} is valid`);
    } else{
        console.log(`{${num1}, ${num2}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(result2)){
        console.log(`{${num3}, ${num4}} to {0, 0} is valid`);
    } else{
        console.log(`{${num3}, ${num4}} to {0, 0} is invalid`);
    }
    if(Number.isInteger(result3)){
        console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is valid`);
    } else{
        console.log(`{${num1}, ${num2}} to {${num3}, ${num4}} is invalid`);
    }
}
//validityChecker(3, 0, 0, 4);
//validityChecker(2, 1, 1, 1);