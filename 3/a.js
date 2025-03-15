function removeDuplicates(arr) {
    let uniqueArray = []; 

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break; 
            }
        }
        
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

let arr = [1, 2, 2, 4, 5, 5, 6, 7, 6, 9];
console.log(removeDuplicates(arr).join(", "));