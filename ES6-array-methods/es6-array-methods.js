//? Array

//? Simple array example

    // let numbers = [10,20,30,40,50,60]

    //?Print all elements of arr
    // console.log(`All elements of array is  ${numbers} `)
    //! output: (6) [10, 20, 30, 40, 50, 60]
    
    //? Print only second element of arr
    // console.log(`3rd element of array is ${numbers[2]} `)
    //! output: 30

    //? sum all elements of array
    // let sum = 0;
    // for(var i = 0; i < numbers.length; i++){
    //     sum = sum + numbers[i]
    // }
    // console.log(`The sum of all elements in array ${sum}`)
    //! output: (6) [10, 20, 30, 40, 50, 60]

    //?---------------------------------------
    
    //? ARRAY METHODS
    
    //! push,pop,shift,inshift,concat,slice,splice,for each,map,filter,reduce,find,findIndex,every,some,sort,reverse,includes,indexOf,join
    
    //? 1. Push:

    //? Def: add one or more elements to last of array.

    //! Example:
    
    // var names = ['ali','khan']
    // console.log(`before : ${names}`);
    
    //! output: before : ali,khan
    
    // names.push('hamza','yahya')
    // console.log(`after: ${names}`)
    
    //! output: after: ali,khan,hamza,yahya
    
    //?---------------------------------------
    
    //? 2. pop:
    
    //? Def: removes and returns the last element  of an array
    
    //  var names = ['ali','khan','javed','musavir shah']
    //  console.log(names);
    
    //  var removesElmt = names.pop()
    //  console.log("after apply pop method ", names);
    
    //  console.log('and remove elements is ',removesElmt);
    
    //! apply pop method second time and store value
    
    //  var removesElmt = names.pop()
    //  console.log("after apply pop method ", names);
    
    //  console.log('and remove elements is ',removesElmt);
    
    //?---------------------------------------
    
    
    //? 3. shift:
    
    //? Def: removes and return first element of an array
    
    // var numbers = [12,23,34,345]
    // console.log('original array is : ' + numbers);
    
    
    // var removedelm = numbers.shift();
    // console.log('after apply shift : '+ numbers);
    
    // console.log('removed element is : ' + removedelm);
    
    //! apply second time
    // console.log('original array is now : '+ numbers);
    
    // removedelm = numbers.shift();
    // console.log('array after apply second time shift method is : ' + numbers);
    
    // console.log('removed element is ' + removedelm);
    
    //?---------------------------------------
    
    //? 4. unshift :
    
    //? Def: add one or more elements to the begining of array
    
    // var person = ['name','roll no','class','id']
    // console.log('original array ', person);
    
    // person.unshift('serial no');
    // console.log('array after unshift ',person);
    
    
    //?---------------------------------------
    
    //? 5. concat:
    
    //? Def: it merges two or more arrays and create a new array.
    
    // var person = ['name','roll no','class']
    // var data = ['huzaifa',12,'fcs']
    
    // var concatarray = person.concat(data)
    // console.log(concatarray);
    
    //! also concaninate opposite array
    // concatarray = data.concat(person)
    // console.log(concatarray);
    
    
    //?---------------------------------------

    //? 6. slice:

    //? Def: extract section of an array and create a new array but cannot modify original array.

    // slice(1, 4) first is included but second is excluded
     
    // var numbers = [1,2,3,4,5,6,7]
    // var newarr = numbers.slice(1,5)

    // console.log('oraginal array ' , numbers);
    // console.log('slice array ',newarr);
    
    
    //?---------------------------------------

    //? 7. splice:
    
    //? Def: adds, remove or replace elements in an array.
    // splice(remove form this index, how many elements will remove, replace which this element)
    // splice(1,3,88)
    
    // var numbers = [10,12,23,34,45,56,56,67,90]
    // numbers.splice(1,2,900)

    // console.log('array after splice ',numbers);
    
    // //! another example:
    // var person = ['huzaifa','ali','hamza','mahtab']
    // person.splice(2, 2, 'hamad')
    
    // console.log('second array after splice ', person);
    
    
    //?---------------------------------------

    //? 8. for each:
    
    //? Def: executes a provided function once of each array element.

    //Executes a function for each array element.
    
    // let arr1 = [1, 2, 3];
    // arr1.forEach(n => console.log(`after apply for each ` + n * 2));


    //? 9. Map
    // Creates a new array by applying a function to each element.

    // let arr2 = [1, 2, 3];
    // let doubled = arr2.map(el => el * 2);
    // console.log(`after apply map ` + doubled);


    //? 10. Filter
    // Creates a new array with elements that pass a test.

    // let arr3 = [1, 2, 3, 4];
    // let even = arr3.filter(el => el % 2 === 0);
    // console.log(`even numbers : ` , even); // Output: [2, 4]


    //?  11. Reduce
    // Reduces the array to a single value.

    // let arr4 = [1, 2, 3];
    // let sum = arr4.reduce((acc, el) => acc + el, 0);
    // console.log(sum); // Output: 6


    //? 12. Find
    // Returns the first element that satisfies a condition.

    // let arr5 = [1, 2, 3];
    // let found = arr5.find(el => el > 1);
    // console.log(found); // Output: 2


    //?  13. FindIndex
    // Returns the index of the first element that satisfies a condition.

    // let arr6 = [1, 2, 3];
    // let index = arr6.findIndex(el => el > 1);
    // console.log(index); // Output: 1


    //?  14. Every
    // Checks if all elements satisfy a condition.

    // let arr7 = [1, 2, 3];
    // let allPositive = arr7.every(el => el > 0);
    // console.log(allPositive); // Output: true


    //?  15. **Some**
    // Checks if at least one element satisfies a condition.

    // let arr8 = [1, 2, 3];
    // let hasEven = arr8.some(el => el % 2 === 0);
    // console.log(hasEven); // Output: true


    //? ### 16. **Sort**
    // Sorts the elements in ascending or custom order.

    // let arr9 = [3, 1, 2];
    // arr9.sort();
    // console.log(arr9); // Output: [1, 2, 3]


    //? ### 17. **Reverse**
    // Reverses the order of elements in an array.

    // let arr10 = [1, 2, 3];
    // arr10.reverse();
    // console.log(arr10); // Output: [3, 2, 1]


    //? ### 18. **Includes**
    // Checks if an array contains a specified element.

    // let arr11 = [1, 2, 3];
    // console.log(arr11.includes(2)); // Output: true


    // ### 19. **IndexOf**
    // Finds the index of a specified element.

    // let arr12 = [1, 2, 3];
    // console.log(arr12.indexOf(2)); // Output: 1


    //? ### 20. **Join**
    // Joins array elements into a string.

    // let arr13 = ['a', 'b', 'c'];
    // let joined = arr13.join('.');
    // console.log(joined); 
