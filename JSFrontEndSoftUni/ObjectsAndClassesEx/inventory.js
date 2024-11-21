function solve(input){
    const heroes = [];
    input.forEach(entry => {
        const [hero, level, items] = entry.split(' / ');
        let newHero = {
            Hero: hero,
            level: Number(level),
            items: items.split(', ')
        };
        heroes.push(newHero);
    });
    heroes.sort((a, b) => a.level - b.level);
    for(let hero of heroes){
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

// solve(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);

//I'm Batman