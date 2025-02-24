export function costCalculator() {

    const amount = 124;
    const fee = 3;
    const intFee = 0.01;
    const int = amount * intFee;
    const total = amount + int + fee;
    
    console.log(total);
}

costCalculator();

