function solve(word, text) {
    const goal = word.toLowerCase();
    const wordArray = text.split(' ');
    let found = false;

    for (let currentWord of wordArray) {
        if (currentWord.toLowerCase() === goal) {
            console.log(word);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log(`${word} not found!`);
    }
}

//solve('javascript', 'JavaScript is the best programming language');
//solve('python', 'JavaScript is the best programming language');