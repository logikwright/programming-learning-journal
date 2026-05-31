function shuttleSort(inputArr) {
    let left = 0;
    let right  = inputArr.length-1;
    let minimumValueIndex = 0;
    let minimumValueAt = 0;
    
    for(let i = right; i > left; i--) {

        let didItSwap = false;
        for(let j = left + 1; j < i; j++) {
            
            if(inputArr[j-1] > inputArr[j]) {
                didItSwap = true;
                minimumValueIndex = j-1;
                [inputArr[j-1], inputArr[j]] = [inputArr[j], inputArr[j-1]] ;
            }

        }

        if(didItSwap) {
            [inputArr[minimumValueAt], inputArr[minimumValueIndex]] = [inputArr[minimumValueIndex], inputArr[minimumValueAt]] ;
            minimumValueAt++;
        }

    }

    return inputArr;
}

console.log(shuttleSort([34, 12, 22, 9, 4, 60, 56, 14]));
