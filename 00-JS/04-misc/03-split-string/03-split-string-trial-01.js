function splitIt(inputStr) {
    const resultSplit = [];

    for(let i=0; i<inputStr.length; i++) {
        resultSplit.push(inputStr[i]);
    }
    
    return resultSplit;
}

console.log(splitIt("ThisIsExampleString"));
