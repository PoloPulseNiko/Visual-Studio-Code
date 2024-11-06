function order(product, count){
    if(product === 'coffee'){
        console.log((count * 1.50).toFixed(2));
    } else if(product === 'water'){
        console.log((count * 1.00).toFixed(2));
    } else if(product === 'coke'){
        console.log((count * 1.40).toFixed(2));
    } else if(product === 'snacks'){
        console.log((count * 2.00).toFixed(2));
    }
}
//order('water', 5);
//order('coffee', 2)