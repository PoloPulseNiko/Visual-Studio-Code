function processCrystals(input) {
    const targetThickness = input[0];
    const crystals = input.slice(1);

    crystals.forEach(crystal => {
        console.log(`Processing chunk ${crystal} microns`);

        let currentThickness = crystal;

        let count = 0;
        while (currentThickness / 4 >= targetThickness) {
            currentThickness /= 4;
            count++;
        }
        if (count > 0) {
            console.log(`Cut x${count}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }

        count = 0;
        while (currentThickness * 0.8 >= targetThickness) {
            currentThickness *= 0.8;
            count++;
        }
        if (count > 0) {
            console.log(`Lap x${count}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }

        count = 0;
        while (currentThickness - 20 >= targetThickness) {
            currentThickness -= 20;
            count++;
        }
        if (count > 0) {
            console.log(`Grind x${count}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }

        count = 0;
        while (currentThickness - 2 >= targetThickness - 1) {
            currentThickness -= 2;
            count++;
        }
        if (count > 0) {
            console.log(`Etch x${count}`);
            console.log("Transporting and washing");
            currentThickness = Math.floor(currentThickness);
        }

        if (currentThickness < targetThickness) {
            currentThickness += 1;
            console.log("X-ray x1");
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    });
}
// processCrystals([1375, 50000, 8100, 1000]);
