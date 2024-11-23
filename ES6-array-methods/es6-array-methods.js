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
    
    var numbers = [10,12,23,34,45,56,56,67,90]
    numbers.splice(1,2,900)

    console.log('array after splice ',numbers);
    
    //! another example:
    var person = ['huzaifa','ali','hamza','mahtab']
    person.splice(2, 2, 'hamad')
    
    console.log('second array after splice ', person);
    
    
    //?---------------------------------------

    //? 8. for each:
    
    //? Def: executes a provided function once of each array element.

    
    
    