function solve(array, number){
    const finalArray = [];
    for(let i = 0; i < array.length; i++){
        if((i) % number == 0){
            finalArray.push(array[i]);
        }
    }
    return finalArray
}
//solve(['5', '20', '31', '4', '20'], 2);
//solve(['dsa', 'asd', 'test', 'tset'], 2)
//solve(['1', '2', '3', '4', '5'], 6)