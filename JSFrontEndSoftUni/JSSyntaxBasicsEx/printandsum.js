function solve(num1, num2){
    let output = '';
    let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        output += i + ' ';
        sum += i;
    }
    
    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}
//solve(5, 10);