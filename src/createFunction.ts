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
// type Counter = {
//     increment: () => number,
//     decrement: () => number,
//     reset: () => number,
// }

// function createCounter(init: number): Counter {
//     let Init = init
//     return {
//     increment: () => {
//        return  Init = init + 1

//     },
//     decrement: () => {
//         return Init = init -1
//     },
//     reset: () => {
//         return Init = init
//     }
// }
// };

// const counter = createCounter(5)
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4

//Apply Transform Over Each Element in Array

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const array = []
    const value: number
    for (let i = 0; i < arr.length; i++) {
        const value = fn(arr[i], i)
        array.push(value)
    }

    return array
}

//Filter Elenets from array
// let arr = [0,10,20,30]
// let fn = function moreThan10(n) { return n > 10; }

// let filter = function (arr, fn){
//     return arr.filter(fn)
// }
// console.log(filter(arr,fn))

//Allow one function call
// type Oncefn = (...args: JSONValuee[]) => JSONValuee | undefined

// function once(x: Function): OnceFn {
   
//         let i = 1;
//         return function (...args) {
//             if (i) {
//                i = 0;
//                 return (x(...args))
//             }
//         };
//     }
    


//  let x = (a,b,c) => (a + b + c)
//  let oncefn = once(x)

//  console.log(oncefn(1,2,3)); // 6
//  console.log(oncefn(2,3,6)); // returns undefined without calling fn


//Debounce
// type A = (...args: string[]) => void

// export function debounce(fn: A, t: number): A {
//     let timer;
//     return (...args) => {
//         if (timer !== undefined) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => fn(...args), t);
//     }
// };

// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms







