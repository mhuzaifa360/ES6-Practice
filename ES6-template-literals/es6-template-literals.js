//? ES6 TEMPLATE LITERALS

//? use concatenation method

    var user = 'Muhammad Huzaifa';
    document.write('Hello ' + user + " welcome to es6" + "<br>")
    //! output : Hello Muhammad Huzaifa welcome to es6



//? use template literals method 

    document.write(`Hello ${user} welcome to es6 <br>`);
    //! output: Hello Muhammad Huzaifa welcome to es6

 //? use multiple variable in TL

    var user = 'Ali';
    var marks = 200;

    var greet = `
    hello
    '${user}',
     your marks is ${marks}`

    document.write(greet);
    console.log(greet);
    //! output: hello 'Ali', your marks is 200


//? use function for display fullname

    var fname = 'Muhammad';
    var lname = 'Huzaifa';

    function fullname(fname,lname){
        return ` hello ${fname} ${lname}`;
    }

    let greet = `${fullname(fname,lname)}`;
    document.write(greet);

    //! output: hello Muhammad Huzaifa


//? use arithematic operation 

    var a = 12;
    var b = 33;

    function sum(a,b){
        return `<br> the sum of a and b is : ${a + b}`;
    }

    document.write(sum(a,b))
    //! ouptut: the sum of a and b is : 45