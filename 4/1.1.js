function calculateF(x, a, b){
    let result;

    if(x >= 0 && x < 4){
        result = Math.cos(x);
    }
    if (x === 4){
        result = 3 * x ** 2 + b * x;
    }
    if (a * x + b <= 0){
        console.error("аргумент логарифма повинен бути додатним");
        return;
    } 
    if(a * x + b > 0 && x  > 4 && x < 9){
        result = Math.log(log);
    }
    if (x >= 9) {
        console.error("x поза проміжком, функція невизначена ");
        return;
    }

    console.log(`f(${x}) = ${result}`);
    return result;
}

calculateF(4, 2, 1);