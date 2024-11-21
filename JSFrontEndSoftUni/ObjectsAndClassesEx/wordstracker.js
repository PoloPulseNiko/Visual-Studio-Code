function solve(input){
    const wordsToTrack = input.shift().split(' ');
    const wordsAmount = {};
    wordsToTrack.forEach(entry => {
        wordsAmount[entry] = 0;
    })

    for(let i = 0; i < input.length; i++){
        let word = input[i];
        if(wordsAmount.hasOwnProperty(word)) wordsAmount[word]++;
    }
    const sorted = Object.entries(wordsAmount).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}
// solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);