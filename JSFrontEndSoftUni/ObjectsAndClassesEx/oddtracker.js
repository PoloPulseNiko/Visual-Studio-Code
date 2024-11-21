function oddOccurrences(input) {
    const words = input.toLowerCase().split(' ');
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    const result = words.filter(word => wordCount[word] % 2 !== 0);
    const uniqueResult = [...new Set(result)];

    return uniqueResult.join(' ');
}

// console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')); // Output: 'c# php 1 5'
// console.log(oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')); // Output: 'soft food'

//I'm Batman