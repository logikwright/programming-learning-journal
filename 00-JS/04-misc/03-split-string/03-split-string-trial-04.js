function splitIt(inputStr) {
    const resultSplit = [];
    let tempStr = "";

    for(let i=0; i<inputStr.length; i++) {
        
        if(inputStr[i] !== " ") {
            tempStr += inputStr[i];
        } else if(i === inputStr.length - 1) {
            resultSplit.push(tempStr);
        } else {
            resultSplit.push(tempStr);
            tempStr = "";
        }
    }
    
    return resultSplit;
}

console.log(splitIt("aa bbb ccc"));

console.log(`[aa, bb, ccc]`);
