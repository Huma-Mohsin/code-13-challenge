//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//solution
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScrip
function makeshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("I have ".concat(size, " shirt and ").concat(message, " is printed on it."));
}
//calling a function.
makeshirt();
//Make a medium shirt with the default message, 
makeshirt("medium");
//and a shirt of any size with a different message.
makeshirt("small", "I Love Coding");
