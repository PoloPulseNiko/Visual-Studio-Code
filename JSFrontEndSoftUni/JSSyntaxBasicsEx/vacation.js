function solve(amount, groupType, day){
    let price;
    if(groupType == 'Students'){
        if(day == 'Friday'){
            price = amount * 8.45;
        } else if(day == 'Saturday'){
            price = amount * 9.80;
        } else if(day == 'Sunday'){
            price = amount * 10.46;
        }
        if(amount >= 30) price *= 0.85;
    } else if(groupType == 'Business'){
        if(amount >= 100) amount -= 10;
        if(day == 'Friday'){
            price = amount * 10.90;
        } else if(day == 'Saturday'){
            price = amount * 15.60;
        } else if(day == 'Sunday'){
            price = amount * 16.00;
        }
    } else if(groupType == 'Regular'){
        if(day == 'Friday'){
            price = amount * 15.00;
        } else if(day == 'Saturday'){
            price = amount * 20.00;
        } else if(day == 'Sunday'){
            price = amount * 22.50;
        }
        if(amount >= 10 && amount <= 20) price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

//solve(30, "Students", "Sunday");
//solve(40,"Regular","Saturday")