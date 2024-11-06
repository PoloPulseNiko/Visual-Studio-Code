function solve(array, count){
    for(let i = 0; i < count; i++){
        array.push(array.shift());
    }
    let result = '';
    console.log(array.join(' '));
}
//solve([51, 47, 32, 61, 21], 2)
