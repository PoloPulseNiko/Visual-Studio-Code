function solve(input){
    let employees = {};
    input.forEach(entry => {
        const name = entry;
        employees[name] = name.length;
    })
    for(let employee in employees){
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}
// solve([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]
//     );

//I'm Batman