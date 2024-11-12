function gladiatorCosts(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;
    for(let i = 1; i <= lostFights; i++){
        if (i % 2 === 0) brokenHelmet++;
        if (i % 3 === 0) brokenSword++;
        if (i % 2 === 0 && i % 3 === 0) {
            brokenShield++;
            if (brokenShield % 2 === 0) brokenArmor++;
        }
    }
    let finalCosts = (brokenHelmet * helmetPrice) + (swordPrice * brokenSword) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice);
    console.log(`Gladiator expenses: ${finalCosts.toFixed(2)} aureus`);
}
//gladiatorCosts(7, 2, 3, 4, 5);
//gladiatorCosts(23, 12.50, 21.50, 40, 200);