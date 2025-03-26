function calculateF (x, a, b){
    let result;
    if (x >= 0 && x < 9){
        if(x < 4){
            result = Math.cos(x);
        } else if (x === 4){
            result = 3 * x ** 2 + b * x;
        } else {
            let log = a * x + b;
            if(log <= 0){
                console.error("аргумент логарифма повинен бути додатним");
                return;
            } 
            result = Math.log(log);
        }
    } else {
        console.error("x поза проміжком, функція невизначена ");
        return;
    }
    
    console.log(`f(${x}) = ${result}`);
    return result;
}
calculateF(4, 2, 1);