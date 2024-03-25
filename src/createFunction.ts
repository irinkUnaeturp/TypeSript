// function createHelloWorld() {

//     return function(...args): string {
//         return "Hello World!"
//     };
// };


//  const x = createHelloWorld();
//  console.log(x()); // "Hello World"

//Counter
// function createCounter(n: number) {
// let count = n
//     return function () {
//        return count++

//     }
// }

// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12

//To be or not to be
// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean|string;
//     notToBe: (val: any) => boolean|string;
// };

// function expect(val: any): ToBeOrNotToBe 
//     {
//     return{
//     toBe: (value: any) => {
//         if (value == val) {
//           return true;
//         } else {
//           return "Not Equal";

//         }
//       },
//      notToBe: (value: any) => {
//         if (value != val) {
//           return true;
//         } else {
//           return "Equal";

//         }
//     }
//     }
// };

//  console.log(expect(5).toBe(5)); // true
//  console.log(expect(5).notToBe(5)); // throws "Equal"

//counter II
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    function increment(init) {
        init += 1
        console.log(init)
    }
    function decrement(init) {
        return init -= 1
    }
    function reset(init) {
        return init
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

