//? Es6 variable scope 
//? difference on the basis of redeclaration, reassign
//* var
// var a = 12;
// var a = 11;
// a = 133;

// console.log(`value of a is : ${a}`);
//! output = value of a is 133

//* let
// let b = 90;
// let b = 33;
//! Identifier 'b' has already been declared
// b = 22;

// console.log(`value of b is : ${b}`);
//! output : value of b is : 22

//* const
// const c = 44;
// const c = 55;
//! Identifier 'c' has already been declared
// c = 66;
// console.log(`value of c is : ${c}`);
//! TypeError: Assignment to constant variable.


//? difference on the basis of scope
//* var
// if(true){
//     var a = 12;
// }
// console.log(a);
//! 12

//* example of 'var' with the help of 'for loop'
// for(var a = 1; a < 6; a++){
//     document.write(a + "</br>");
// }
// console.log(a);


// ### Correct structure:  
// javascript
for (var a = 1; a < 6; a++) {
    document.write(a + "</br>");
}
console.log(a);

//* let 
// if(true){
//     let b = 11;
// }
// console.log(b);
//! ReferenceError: b is not defined


//* const
// if(true){
//     const c = 14;
// }
// console.log(c);
//! ReferenceError: c is not defined