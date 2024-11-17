     //? Enhanced object literals, Iterators & For. Of, Generators, Modules

    //*----- Enhanced Object Literal
    
    //!----- Example on simple JAVASCRIPT
    

    // var obj = {
      
    //  name : 'Huzaifa',
    //  semester : 5,
     
    //  fun: function(name, semester){
    //    var year = 2022;
    //    var address= 'swabi';
    //    return `My name is ${this.name}, i currently studies in ${this.semester}, i start my BS in ${year} and i am from ${address}`;
      
    //  }
    // }
    // console.log(obj);
    // console.log(obj.fun());
    
    //? if variable and key is same in es6 than write only one
    //? 
    //!----- Example on Advance JAVASCRIPT (ES6)
    

    //!----- Example 1:

    //  let name = 'huzaifa';
    //  let rollNo = 12;
    
    //  let obj1 = {
    //     name,
    //   rollNo,
    //  }
    //  console.log(obj1);
    
    //!----- Example 2:

    //  let n = 'name';
    
    //  let obj2 = {
      //   [n] : 'huzy',
      //   roll : 12
    //  }
    //  console.log(obj2);
    
    
    //!----- Example 3:
    
    //  let n = 'First';
    
    //  let obj3 = {
      //   [n + 'name'] : 'Huzaifakhan'
      //  }
      //  console.log(obj3);
      
      //!----- Example 4:
      
      //  let n = 'first';
      
      //  let obj4 = {
        //   [n + 'name'] : "hamza",
        //   rollNO : 34,
        //   'detail show'(){
          //     return `Student name is ${this.firstname} and roll no is ${this.rollNO}`;
          
          //   }
          //  }
          //  console.log(obj4);
          //  console.log(obj4['detail show']()); //same as console.log(obj4.detail());
          
          //!----- Example 5
          // var name = 'huzaifa';
          // var Class = 12;
          
          // function Student(name, Class){
            //   return {name, Class}
            // }
            // console.log(Student(name, Class));
            
            
            //*----- for of

            // var names = ['huzaifa','ali','hamza'];
            // for (let name of names){
            //   console.log(name);
              
            // }
            
            //*----- Generator
            
            // function* alpaGenerator() {
            //   yield 'A'; 
            //   yield 'B'; 
            //   yield 'C'; 
            // }

            
            // const gen = alpaGenerator();

            // console.log(gen.next().value); 
            // console.log(gen.next().value); 
            // console.log(gen.next().value);
            // console.log(gen.next().value); 

            