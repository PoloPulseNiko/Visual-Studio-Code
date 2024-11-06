function solve(string, searchedWord){
    let words = string.split(' ');
    let counter = 0;
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(word == searchedWord) counter++;
    }
    console.log(counter);
}
//solve('This is a word and it also is a sentence', 'is')
//solve('softuni is great place for learning new programming languages', 'softuni')