function bubbleSort(inputArr) {
    let left = 0;
    let right = inputArr.length-1;

    for(let i = right; i > left; i--) {
        
        for(let j = left+1; j <= i; j++) {

            if(inputArr[j-1] > inputArr[j]) {
                [inputArr[j-1], inputArr[j]] = [inputArr[j], inputArr[j-1]];
            }

        }
    }

    return inputArr;
}

console.log(bubbleSort([34, 12, 22, 9, 4, 60, 56, 14]));
