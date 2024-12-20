function solve(input){
    const meetings = {};
    input.forEach(entry => {
        const [day, name] = entry.split(' ');
        if(meetings[day] !== undefined){
            console.log(`Conflict on ${day}!`);
        } else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    for(let key in meetings){
        console.log(`${key} -> ${meetings[key]}`);
    }
}

// solve(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);