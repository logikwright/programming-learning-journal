function splitIt(inputStr) {
    const resultSplit = [];
    let tempStr = "";

    for(let i=0; i<inputStr.length; i++) {

        if(inputStr[i] === " ") {
            console.log(`space at ${i} and current tempStr = ${tempStr}`);
            resultSplit.push(tempStr);
            tempStr = "";
            continue;
        }else{
            tempStr += inputStr[i];
        }
    }
    
    return resultSplit;
}

console.log(splitIt("aa bbb ccc"));

console.log(`[aa, bb, ccc]`);
