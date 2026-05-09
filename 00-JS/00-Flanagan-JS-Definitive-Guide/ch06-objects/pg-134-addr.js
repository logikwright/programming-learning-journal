const customer = {
    address0: "Street 1",
    address1: "Street 2",
    address2: "Street 3",
    address3: "Street 4",
};

let addr = "";

for(let i = 0; i < 4; i++) {
   addr += customer[`address${i}`] + "\n";
}
/*
Internally the addr looks like "addr = "Street 1\n"Street 2\n"Street 3\n"Street 4\n" but when console.log runs, because of "\n" which is a newline escape character, it tells the console "Start printing the next part on a new line".
*/
console.log(addr);
