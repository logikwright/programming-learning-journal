//LISTING 3.3
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

//LISTING 3.5
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}` + "\n");

// The doule equal sign performs a comparison using type coercion so that JavaScript will try to convert the values it is working with to produce a useful Result, also known as Abstract Equality Comparison.

//LISTING 3.6
if (hatPrice == bootsPrice) {
    console.log("Result of double equal comparison : Prices are the same." + "\n");
} else {
    console.log("Result of double equal comparison : Prices are different." + "\n");
}

// The double equal (==) performs a comparison that applies type coercion.

// The triple equal (===) applies a strict comparison that will return true only if the values have the same type and are equal.

if (hatPrice === bootsPrice) {
    console.log("Result of triple equal comparison : Prices are the same." + "\n");
} else {
    console.log("Result of triple equal comparison : Prices are different." + "\n");
}

let totalPriceBeforeConversion = hatPrice + bootsPrice ;
console.log(`Total Price before explicit conversion: ${totalPriceBeforeConversion}`+"\n");

let totalPrice = Number(hatPrice) + Number(bootsPrice) ;
console.log(`Total Price after explicit conversion using Number() function: ${totalPrice}` +"\n");

//LISTING 3.7
let myVariable = "Adam";

//LISTING 3.8
console.log(`Type: ${typeof myVariable}`);

//LISTING 3.9
myVariable = 100;
console.log(`Type: ${typeof myVariable}` + "\n");

//LISTING 3.11
let firstCity;
let secondCity = firstCity || "London";

// JavaScript automatically assigns value of 'undefined' to those variables that are defined but not assigned a value. 

// And when these values are used/compared with logical OR operator (||) they are coerced into the boolean type.

// Values that are null or undefined are converted into the false value.
console.log(`Value of firstCity which is defined/declared but not assigned a value : ${firstCity}` + "\n");

console.log(`City: ${ secondCity}`+ "\n");

//LISTING 3.12
let taxRate;  //no tax rate has been defined
console.log(`Tax rate: ${taxRate || 10}%`+ "\n");
taxRate = 0; //tax rate has been assigned a 0 (zero) value
console.log(`Tax rate: ${taxRate || 10}%`+ "\n");

//in the above both outputs 10% as tax rate whether the variable is only declared/defined or assinged a '0' value.

//its alright if the variable is only declared but no assinged to select a value in the option

//but when the '0' is assigned which is a valid value the program selects value in the option because JavaScript the logical OR '||' coerces '0' to false and it's is idiomatically designed to use first truthy value

//LISTING 3.13
let taxRateRevised;
console.log(`Tax rate: ${taxRateRevised ?? 10}%`+ "\n");

taxRateRevised = 0;
console.log(`Tax rate: ${taxRateRevised ?? 10}%`+ "\n"); // 0

//NULLISH COALESCING operator '??' selects first-defined instead of truthy value it doesn't coerce the value

//LISTING 3.14
function sumPrices (first, second, third) {
    let output = first + second + third; 
    return output;
}

let totalPriceWithFunction = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPriceWithFunction}`+ "\n");

//LISTING 3.15
console.log(`Total: ${totalPriceWithFunction} ${typeof totalPriceWithFunction}` + "\n");

totalPriceWithFunction = sumPrices(100, 200, 300);

console.log(`Total: ${totalPriceWithFunction} ${typeof totalPriceWithFunction}` + "\n");

totalPriceWithFunction = sumPrices(100, 200);

console.log(`Total: ${totalPriceWithFunction} ${typeof totalPriceWithFunction}` + "\n");

//LISTING 3.16

function sumPricesWithDefaultParameter(first, second, third = 0) {
    return first + second + third;
}

let netPriceWithFunction = sumPricesWithDefaultParameter(hatPrice, bootsPrice);

console.log(`Total: ${netPriceWithFunction} ${typeof netPriceWithFunction}` + "\n");

netPriceWithFunction = sumPricesWithDefaultParameter(100, 200, 300);

console.log(`Total: ${netPriceWithFunction} ${typeof netPriceWithFunction}` + "\n");

netPriceWithFunction = sumPricesWithDefaultParameter(100, 200);

console.log(`Total: ${netPriceWithFunction} ${typeof netPriceWithFunction}` + "\n");