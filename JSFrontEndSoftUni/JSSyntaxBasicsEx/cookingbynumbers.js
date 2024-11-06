function solve(number, ins1, ins2, ins3, ins4, ins5) {
    let num = Number(number);
    let list = [ins1, ins2, ins3, ins4, ins5];

    // Integrated rounding function
    function roundToOneDecimal(num) {
        if (Number.isInteger(num)) {
            return num;
        } else {
            return parseFloat(num.toFixed(1));
        }
    }

    for (let i = 0; i < list.length; i++) {
        switch (list[i]) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num++; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(roundToOneDecimal(num));
    }
}
//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');