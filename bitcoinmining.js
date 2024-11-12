function bitcoinMining(goldPerDay) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalMoney = 0;
    let totalBitcoins = 0;
    let firstBitcoinDay = 0;

    for (let day = 1; day <= goldPerDay.length; day++) {
        let goldMined = goldPerDay[day - 1];
        if(day % 3 === 0){
            goldMined *= 0.70;
        }
        let moneyEarned = goldMined * goldPrice;
        totalMoney += moneyEarned;

        while (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;
            totalBitcoins++;
            if (totalBitcoins === 1) {
                firstBitcoinDay = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([3124.15, 504.212, 2511.124]);
// bitcoinMining([50, 100])