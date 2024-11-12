function solve(input){
    const person = JSON.parse(input);
    const entries = Object.entries(person);
    for(const [property, value] of entries){
        console.log(`${property}: ${value}`);
    }
}
// solve('{"name": "George", "age": 40, "town": "Sofia"}');