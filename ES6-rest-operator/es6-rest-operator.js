//? Rest operator

//? old method

//? print all arguments using 'arguments' keyword

    // function sum(){
    //     console.log(arguments);        
    // }
    // sum(12,324,43);
    // sum(1,2)
    //! output: Arguments(3) [12, 324, 43]
    //! output: Arguments(2) [1,2]
    

//? print sum of all arguments using 'for in '

    // function sum(){
    //     var sum1 = 0;
    //     for(let i in arguments){
    //         sum1 += arguments[i];
    //     }
    //     console.log(`The sum of all arguments is :   ${sum1}`);
        
    // }
    // sum(12,21)
    //!output: The sum of all arguments is : 33


//? error in above example

    // function sum(){
    //     let sum1 = 0;
    //     for(let a in arguments){
    //         sum1 += arguments[a];
    //     }
    //     console.log(sum1);
        
    // }
    // sum('number',12,11,11)
    //! output: 0number12111

//? New Rest operator

    // function sum(name,city, ...number){
    //     console.log(arguments);

    //     let sum = 0;
    //     for(let i in number){
    //         sum += number[i];

    //     }
    //     console.log(`My name is ${name} and i live in peshawar and my marks is ${sum}`);

        
    // }
    // sum('Huzaifa','peshawar',12,21)
    // sum('ali','swabi',90,90)