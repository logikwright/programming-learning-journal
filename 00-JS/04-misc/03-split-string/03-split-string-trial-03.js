function splitIt(inputStr) {
    const resultSplit = [];
    let tempStr = "";

    for(let i=0; i<inputStr.length; i++) {
        
        tempStr += inputStr[i];

        if(inputStr[i] === " " || i === inputStr.length-1){
            resultSplit.push(tempStr);
            tempStr = "";
        }

    }
    
    return resultSplit;
}

console.log(splitIt("aa bbb ccc"));

console.log(`[aa, bb, ccc]`);
