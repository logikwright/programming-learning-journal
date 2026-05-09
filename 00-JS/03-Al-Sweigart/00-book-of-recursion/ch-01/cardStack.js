let cardStack = [];

cardStack.push("5 of diamonds");
console.log(cardStack + "\n");

cardStack.push("3 of clubs");
console.log(cardStack + "\n");

cardStack.push("ace of hearts");
console.log(cardStack + "\n");

cardStack.pop();
console.log(cardStack + "\n");

console.log(`
[5 of diamonds]
[5 of diamonds, 3 of clubs]
[5 of diamonds, 3 of clubs, ace of hearts]
[5 of diamonds, 3 of clubs]
`);
