function shuttleSort(inputArr) {
    let left = 0;
    let right = inputArr.length - 1;

    let minValueAt = 0;

    for(let outside = right; outside >= 6; outside--) {

        for(let inside = left+1; inside <= outside; inside++) {
            
            if(inputArr[inside-1] > inputArr[inside]) {
                [inputArr[inside-1] , inputArr[inside]] = [inputArr[inside] , inputArr[inside-1]] ;
            }

            if(inputArr[minValueAt] > inputArr[inside-1]) {
                [inputArr[minValueAt] , inputArr[inside-1]] = [inputArr[inside-1] , inputArr[minValueAt]] ;
            }
        }

        minValueAt++;
    }

    return inputArr;
}

console.log(shuttleSort([34, 12, 22, 9, 4, 60, 56, 14]));
