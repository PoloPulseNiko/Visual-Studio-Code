function solve(startArray){

    const finalArray = [];
    const initialLength = startArray.length;
    startArray = startArray.sort((a, b) => a - b);
    for(let i = 0; i < initialLength; i++){
        if(i % 2 == 0){
            const num = startArray.shift();
            finalArray.push(num);
        } else{
            const num = startArray.pop();
            finalArray.push(num);
        }
    }
    return finalArray;
}

//console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));