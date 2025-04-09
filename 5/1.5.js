function f (n) {
    let arr = [];

    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 51)); //(max - min + 1) + min
    }

    console.log("Початковий масив:");
    console.log(arr);

    for(let i = 0; i < n - 1; i++){
        let arrmax = i;
        
        for(let j = i + 1; j < n; j++){
            if(arr[j] > arr[arrmax]){
                arrmax = j;
            }
        }
        [arr[i], arr[arrmax]] = [arr[arrmax], arr[i]];
    }
    console.log("Відсортований масив за спаданням:");
    console.log(arr);
}

f(29);