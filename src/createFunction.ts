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
// const arr = [1,2,3]
// const fn = function plusone(n) { return n + 1; }
// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//     const array: Array<number> = []
//     for (let i = 0; i < arr.length; i++) {
//         const value = fn(arr[i], i)
//         array.push(value)
//     }

//     return array
// }
// console.log(map(arr,fn))

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

//Array Reduce Transformation

// type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {
//     let line = init
//     for (let i = 0; i < nums.length; i++) {
//         line = fn(line, nums[i])
//     }
//     return line

// };
// console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr; },0))


//Function Composion
// type A = (x: number) => number;

// function compose(functions: A[]): A {

//     return function(x) {
//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//         }
//         return x
//     }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9

//Return Length of arguments Passed

// function argumentsLength(...args): number {
//     const leng = args.length
//     return leng
// };
// console.log(argumentsLength(1, 2, 3))

//Allow one Function call


// function once(fn: Function) {

//     return function (...args) {

//         let i = 1;
//         return function (...args) {
//             if (i) {
//                 i = 0;
//                 return (fn(...args))
//             }
//         };
//     }

// }

// let fn = (a, b, c) => (a + b + c)
// let onceF = once(f)

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

//Memoize
function memoize(fn) {
    
    const ad = {};
   
    return function(this:any, ...args) {
     const key = JSON.stringify(args);
     
     if (key in ad) {
       return ad[key];
     }
     
     const result = fn.apply(this, args);
     ad[key] = result;
     
     return result;
   }
   
 }
 
 
 const memoizedSum = memoize(function(a, b) {
   return a + b;
 });
 
 console.log(memoizedSum(2, 3)); // Output: 5

