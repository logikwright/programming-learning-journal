function splitIt(inputStr) {
    const resultSplit = [];
    let tempStr = "";

    for(let i=0; i<=inputStr.length; i++) {
        if(inputStr[i] === " " || i === inputStr.length) {
            resultSplit.push(tempStr);
            tempStr = "";
        }else {
            tempStr += inputStr[i];
        }
    }
    
    return resultSplit;
}

console.log(splitIt("aa bbb ccc"));
console.log(splitIt(" aa bbb ccc     "));

console.log(`['aa', 'bb', 'ccc']`);
console.log(`['aa', 'bbb', 'ccc']`);
