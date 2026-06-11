function splitIt(inputStr) {
    const resultSplit = [];
    let tempStr = "";

    for(let i=0; i<=inputStr.length; i++) {
        if(inputStr[i] === " " || i === inputStr.length) {
            if(tempStr === "") {
                continue;
            } else {
                resultSplit.push(tempStr);
                tempStr = "";
            }
        }else {
            tempStr += inputStr[i];
        }
        console.log(`i is ${i} and tempStr is ${tempStr}`);
    }
    
    return resultSplit;
}

//console.log(splitIt("aa bbb ccc"));
console.log(splitIt(" aa bbb ccc     "));

