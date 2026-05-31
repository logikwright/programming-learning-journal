function sortTheInput(inputArr) {
    let startingPoint = 0;
    console.log("\n" + `Value of input Array is : ${inputArr}` + "\n");

    while (startingPoint <= inputArr.length-1) {
        let minimumValue = startingPoint;
        for(let i = startingPoint; i < inputArr.length; i++) {
            console.log(`minimum index before iteration : ${i}`);
            if(inputArr[minimumValue] > inputArr[i]) {
                minimumValue = i;
            }
            console.log(`this is iteration : ${i}`+` minimum index after iteration : ${i}`+ "\n" + `current state of input array : ${inputArr}` + "\n");
        }

        [inputArr[startingPoint], inputArr[minimumValue]] = [inputArr[minimumValue], inputArr[startingPoint]] ;
        startingPoint++;
    }

    return inputArr;
}

console.log(sortTheInput([11, 77, 99, 0]));
console.log(sortTheInput([77, 99, 0, 11]));
