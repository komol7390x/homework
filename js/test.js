// Normal rejimda
function myFunction() {
    undeclaredVar = 10; // globalga chiqarib yuboriladi
}
myFunction();
console.log(undeclaredVar); // 10

// 'use strict' rejimida
'use strict';
function myFunctionStrict() {
    undeclaredVar = 10; // ReferenceError: undeclaredVar is not defined
}
myFunctionStrict();
