function solve(input){
    const addressBook = {};
    input.forEach(entry => {
        const [name, address] = entry.split(':');
        addressBook[name] = address;
    });
    const sortedNames = Object.keys(addressBook).sort();
    sortedNames.forEach(key => {
        console.log(`${key} -> ${addressBook[key]}`);
    });
}
// solve(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);