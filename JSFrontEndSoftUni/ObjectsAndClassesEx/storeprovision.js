function solve(array1, array2){
    const shop = {};
    for(let i = 0; i < array1.length; i += 2){
        shop[array1[i]] = Number(array1[i + 1]);
    }
    for(let i = 0; i < array2.length; i += 2){
        if(shop[array2[i]] !== undefined){
            shop[array2[i]] += Number(array2[i + 1]);
        } else{
            shop[array2[i]] = Number(array2[i + 1]);
        }
    }

    for(let product in shop){
        console.log(`${product} -> ${shop[product]}`);
    }
}

// solve([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     );


//I like trains