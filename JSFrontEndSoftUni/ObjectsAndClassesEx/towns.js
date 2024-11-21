function solve(input){
    const towns = [];
    input.forEach(entry => {
        const [town, latitude, longitude] = entry.split(' | ');
        let newTown = {
            town: town,
            latitude: parseFloat(latitude).toFixed(2),
            longitude: parseFloat(longitude).toFixed(2)
        }
        towns.push(newTown);
    })
    towns.forEach(town => console.log(town));
}
// solve(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])

//I'm Batman