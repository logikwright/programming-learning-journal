function a() {
    let spam = "Ant";
    console.log(`spam is ${spam}.`);
    b();
    console.log(`spam is ${spam}.`);
}

function b() {
    let spam = "Bobcat";
    console.log(`spam is ${spam}.`);
    c();
    console.log(`spam is ${spam}.`);
}

function c() {
    let spam = "Coyote";
    console.log(`spam is ${spam}.`);
    console.log(`spam is ${spam}.`);
}

a();

console.log(
    `
    spam is Ant.
    spam is Bobcat.
    spam is Coyote.
    spam is Coyote.
    spam is Bobcat.
    spam is Ant.
    `
);
