function solve(input){
    const words = input.match(/\b\w+\b/g).map(word => word.toUpperCase());
    console.log(words.join(', '));
}
//solve('Hi, how are you?');