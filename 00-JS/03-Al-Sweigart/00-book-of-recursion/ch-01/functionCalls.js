function a() {
    console.log("a() was called.\n");
    b();
    console.log("a() is returning.\n");
}

function b() {
    console.log("b() was called.\n");
    c();
    console.log("b() is returning.\n");
}

function c() {
    console.log("c() was called.\n");
    console.log("c() is returning.\n");
}

a();
