function f (m){
    if(m < 1 || !Number.isInteger(m)){
        console.error("m має бути цілим числом, яке більше або дорівнює 1");
        return;
    }

    for(let n = 1; n <= m; n++){
        let x_n = Math.cos(n - 1)/(n ** 2 + 1);
        console.log(`x${n} = ${x_n}`);
    }
}

f(6);