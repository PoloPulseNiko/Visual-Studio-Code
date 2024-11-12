function factorialDivision(num1, num2){
    let factorial1 = 1;
    let factorial2 = 1;
    if(num1 === 0) factorial1 = 1;
    else{
        for(let i = 1; i <= num1; i++){
            factorial1 *= i;
        }
    }
    if(num2 === 0) factorial2 = 1;
    else{
        for(let i = 1; i <= num2; i++){
            factorial2 *= i;
        }
    }
    console.log((factorial1 / factorial2).toFixed(2));
}
// factorialDivision(5, 2);
// factorialDivision(6, 2);