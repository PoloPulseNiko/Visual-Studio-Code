function solve(num1, num2, num3){
    let biggest;
    if(num1 > num2 && num1 > num3) biggest = num1;
    else if(num2 > num1 && num2 > num3) biggest = num2;
    else biggest = num3;
    console.log(`The largest number is ${biggest}.`);
}

//solve(5, -3, 16);
//solve(-3, -5, -22.5);