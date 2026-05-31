function sortTheInput(inputArr) {
    let startingPoint = 0;
    let minimumValue = startingPoint;

    for(let i = startingPoint+1; i < inputArr.length; i++) {
        console.log(inputArr[i]);
        if(inputArr[minimumValue] > inputArr[i]) {
            minimumValue = i;
            console.log(minimumValue);
        }
    }

    console.log(minimumValue);
    [inputArr[startingPoint], inputArr[minimumValue]] = [inputArr[minimumValue], inputArr[startingPoint]] ;

    startingPoint++;

    return inputArr;
}

console.log(sortTheInput([11, 77, 99, 0]));
console.log(sortTheInput([77, 99, 0, 11]));
