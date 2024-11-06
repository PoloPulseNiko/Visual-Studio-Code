function solve(input){
    function isOnlyLetters(word) {
        return /^[a-zA-Z]+$/.test(word);
    }
    const words = getHashtags(input);
    function getHashtags(text) {
        return text.match(/#\w+/g) || [];
    }
    words.forEach(hashtag => {
        const word = hashtag.slice(1); // Remove the '#' symbol
        if (isOnlyLetters(word)) {
            console.log(word); // Print the word if it only contains letters
        }
    });
}

//solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
//solve('The symbol # is known #variously in English-speaking #regions as the #number sign');