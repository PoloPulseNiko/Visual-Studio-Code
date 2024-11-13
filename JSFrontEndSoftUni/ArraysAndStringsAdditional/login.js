function login(inputs) {
    const username = inputs[0];
    const correctPassword = username.split('').reverse().join('');
    const attempts = inputs.slice(1);

    for (let i = 0; i < attempts.length; i++) {
        if (attempts[i] === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else if (i === 3) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}

// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
