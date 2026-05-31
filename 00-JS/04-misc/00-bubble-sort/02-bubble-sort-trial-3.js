function bubbleSort(inputArr) {
    let left = 0;
    let right = inputArr.length-1;
    let totalIteration = right;

    for(let i = left; i < right-1; i++) {
        
        for(let j = left+1; j < totalIteration; j++) {

            if(inputArr[j-1] > inputArr[j]) {
                [inputArr[j-1], inputArr[j]] = [inputArr[j], inputArr[j-1]];
            }

        }
        totalIteration--;
    }

    return inputArr;
}

console.log(bubbleSort([34, 12, 22, 9, 4, 60, 56, 14]));
