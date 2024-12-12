function solve(length) {
    const sequence = "ATCGTTAGGG";
    const patterns = [
        "**%1%2**",
        "*%1--%2*",
        "%1----%2",
        "*%1--%2*"
    ];

    let seqIndex = 0;

    for (let i = 0; i < length; i++) {
        const pattern = patterns[i % 4];
        const firstChar = sequence[seqIndex % sequence.length];
        const secondChar = sequence[(seqIndex + 1) % sequence.length];
        console.log(pattern.replace("%1", firstChar).replace("%2", secondChar));
        seqIndex += 2;
    }
}

// solve(4);
// solve(10);

