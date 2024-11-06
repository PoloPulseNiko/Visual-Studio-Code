function solve(speed, roadType){
    let limit;
    switch(roadType){
        case 'residential': limit = 20; break;
        case 'city': limit = 50; break;
        case 'interstate': limit = 90; break;
        case 'motorway': limit = 130; break;
    }
    let status;
    if(speed <= limit) status = null;
    else if(speed > limit && speed <= (limit + 20)) status = 'speeding';
    else if(speed > (limit + 20) && speed <= (limit + 40)) status = 'excessive speeding';
    else status = 'reckless driving';

    if(status == null) console.log(`Driving ${speed} km/h in a ${limit} zone`);
    else console.log(`The speed is ${(speed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`)
}

//solve(40, 'city');
//solve(21, 'residential');
//solve(120, 'interstate');
//solve(200, 'motorway');