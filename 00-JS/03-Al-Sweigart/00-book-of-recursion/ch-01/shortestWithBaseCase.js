function shortestWithBaseCase(makeRecursiveCall) {
    console.log(`shortestWithBaseCase(${makeRecursiveCall}) called.`);

    if(makeRecursiveCall === false) {
        //BASE CASE
        console.log(`Returning from base case.`);
        return;
    }else {
        shortestWithBaseCase(false);
        console.log(`Returning from recursive case.`);
        return;
    }
}

console.log(`Calling shortestWithBaseCase(false):`);
shortestWithBaseCase(false);
console.log();
console.log(`Calling shortestWithBaseCase(true):`);
shortestWithBaseCase(true);

console.log(
    `
    Calling shortestWithBaseCase(false):
    shortestWithBaseCase(false) called.
    Returning from base case.

    Calling shortestWithBaseCase(true):
    shortestWithBaseCase(true) called.
    shortestWithBaseCase(false) called.
    Returning from base case.
    Returning from recursive case.
    `
);
