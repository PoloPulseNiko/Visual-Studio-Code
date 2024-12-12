function solve(input){
    let superHeroCount = Number(input.shift());
    let superHeroes = {};
    for (let i = 0; i < superHeroCount; i++) {
        let [name, powers, energy] = input.shift().split('-');
        superHeroes[name] = { powers: powers.split(','), energy: Number(energy) };
    }

    let command = '';
    while((command = input.shift()) !== "Evil Defeated!"){
        let line = command.split(' * ');
        let currentHero = superHeroes[(line[1])];
        switch(line[0]){
            case "Use Power":
                if(currentHero.powers.includes(line[2]) && currentHero.energy >= Number(line[3])){
                    currentHero.energy -= Number(line[3]);
                    console.log(`${line[1]} has used ${line[2]} and now has ${currentHero.energy} energy!`);
                } else{
                    console.log(`${line[1]} is unable to use ${line[2]} or lacks energy!`);
                }
                break;
            case "Train":
                if (currentHero.energy == 100){
                    console.log(`${line[1]} is already at full energy!`);
                } else{
                    let energyGained = Math.min(100 - currentHero.energy, Number(line[2]));
                    currentHero.energy += energyGained;
                    console.log(`${line[1]} has trained and gained ${energyGained} energy!`);
                }
                break;

            case "Learn":
                if(currentHero.powers.includes(line[2])){
                    console.log(`${line[1]} already knows ${line[2]}.`);
                } else{
                    currentHero.powers.push(line[2]);
                    console.log(`${line[1]} has learned ${line[2]}!`);
                }
                break;
        }
    }

    for (let hero in superHeroes) {
        console.log(`Superhero: ${hero}`);
        console.log(`- Superpowers: ${superHeroes[hero].powers.join(', ')}`);
        console.log(`- Energy: ${superHeroes[hero].energy}`);
    }
}

// solve([
//     "3",
//     "Iron Man-Repulsor Beams,Flight-80",
//     "Thor-Lightning Strike,Hammer Throw-10",
//     "Hulk-Super Strength-60",
//     "Use Power * Iron Man * Flight * 30",
//     "Train * Thor * 20",
//     "Train * Hulk * 50",
//     "Learn * Hulk * Thunderclap",
//     "Use Power * Hulk * Thunderclap * 70",
//     "Evil Defeated!"
// ])
