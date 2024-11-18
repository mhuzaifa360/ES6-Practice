//? Arrow function

//? old method to declare function
    var name = 'huzaifa';
    let greeting = function(name){
        return `hello and welcome ${name}`;
    }
    console.log(greeting(name));
    //! ouput: hello and welcome huzaifa


//? new arrow function method
    var fname = 'huzaifa';
    var lname = 'khan';
    var cgpa = 3.22;

    let result = (fname,lname,cgpa) => {
        return `hi, ${fname} ${lname} and welcome your final cgpa is ${cgpa}`;
    }
    console.log(result(fname,lname,cgpa));
    //! output: hi, huzaifa khan and welcome your final cgpa is 3.22


//? one line arrow function code
    let greet = (name) =>  `hello and welcome ${name}`;

    console.log(greet('huzaifa khan'));
    //!output: hello and welcome huzaifa khan
    

//? if i want to check 'typeof arrow function'
    var greeting1 = (name) =>  `hello and welcome ${name}`;
    console.log(typeof greeting1);
    //! function
    
    
//? if we needs only one parameter in arrow function than there is no necessary parenthesis
    var greeting0 = name =>  `hello and welcome ${name='m huzaifa '}`;
    console.log(greeting0());
    //! hello and welcome m huzaifa