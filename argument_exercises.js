const sum = (...args) => {
    return args.reduce((acc, val) => {
        return acc + val;
    });

}

// console.log(sum(1,3,4,5))




// Function.prototype.myBind = function(inst, ...bindArgs) {

//     return (...callArgs) => { 
//         this.apply(inst, [...bindArgs,...callArgs]);
//     }
// }


// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind(pavlov);
//   notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true

const curriedSum = function(numArgs) {
    const numbers = [];
    const _curriedSum = function(num) {
        numbers.push(num);
        if(numbers.length === numArgs) {
            return sum(...numbers);
        }else{
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// const sum1 = curriedSum(4);
// console.log(sum1(5)(30)(20)(1)); // => 56

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   console.log(f1)
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   sumThree.curry(3)(4)(20)(6); // == 30


Function.prototype.curry = function(numArgs) {
    const arr = [];
    const _curried = (val) => {
        console.log(val,arr)
        arr.push(val)
        if(arr.length === numArgs){
            console.log(this)
            return  this(...arr);
        }else{
            return _curried;
        }
    }
    return _curried
}

console.log(sum.curry(3)(1)(3)(7))