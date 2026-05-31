function bubbleSort(inputArr) {
    let left = 0;
    let right = inputArr.length-1;

    for(let i = left; i < right-1; i++) {
        for(let j = left+1; j < right; j++) {
            if(inputArr[i] > inputArr[j]) {
                [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
            }
        }
    }

    return inputArr;
}

console.log(bubbleSort([34, 12, 22, 9, 4, 60, 56, 14]));
