function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let daysOperated = 0;
    
    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= 26;
        startingYield -= 10;
        daysOperated++;
    }
    
    if (totalSpice >= 26) {
        totalSpice -= 26;
    }
    
    console.log(daysOperated);
    console.log(totalSpice);
}


//spiceMustFlow(111);  // Expected output: 2 and 134
//spiceMustFlow(450);  // Expected output: 36 and 8938