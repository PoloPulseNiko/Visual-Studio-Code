function solve(number) {
    let numstr = number.toString();
    let same = true;
    let sum = 0;
    for (let i = 0; i < numstr.length - 1; i++) {
        if (numstr[i] != numstr[i + 1]) same = false;
        sum += Number(numstr[i]);
    }
    sum += Number(numstr[numstr.length - 1]);

    console.log(same);
    console.log(sum);
}

//solve(2222222);
//solve(1234);