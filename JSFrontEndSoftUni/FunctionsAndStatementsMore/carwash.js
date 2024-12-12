function solve(input){
    let cleanliness = 0;
    for (let i of input){
        if(i === "soap"){
            cleanliness += 10;
        } else if(i === "water"){
            cleanliness *= 1.2;
        } else if(i === "vacuum cleaner"){
            cleanliness *= 1.25;
        } else if(i === "mud"){
            cleanliness *= 0.9;
        }
    }

    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`)
}

// solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
// solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);