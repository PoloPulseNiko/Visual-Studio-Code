function solve(text, word){
    let censored = text.replace(word, repeat(word));
    while(censored.includes(word)){
        censored = censored.replace(word, repeat(word));
    }
    console.log(censored);
    function repeat(input){
        let output = '';
        for(let i = 0; i < input.length; i++){
            output += '*'
        }
        return output;
    }
}
//solve('A small sentence with some words', 'small');