function charactersInRange(char1, char2){
    let firstValue = char1.charCodeAt(0);
    let secondValue = char2.charCodeAt(0);
    const charArray = [];
    if(firstValue < secondValue){
        for(let i = firstValue + 1; i < secondValue; i++){
            charArray.push(String.fromCharCode(i));
        }
    } else{
        for(let i = secondValue + 1; i < firstValue; i++){
            charArray.push(String.fromCharCode(i));
        }
    }
    console.log(charArray.join(' '));
}

// charactersInRange('a', 'd');
// charactersInRange('#', ':');
// charactersInRange('C', '#');