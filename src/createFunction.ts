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
// function memoize(fn) {
    
//     const ad = {};
   
//     return function(this:any, ...args) {
//      const key = JSON.stringify(args);
     
//      if (key in ad) {
//        return ad[key];
//      }
     
//      const result = fn.apply(this, args);
//      ad[key] = result;
     
//      return result;
//    }
   
//  }
 
 
//  const memoizedSum = memoize(function(a, b) {
//    return a + b;
//  });
 
//  console.log(memoizedSum(2, 3)); // Output: 5

//Add two promises
// export async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>) {
//     // promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
//     // promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
//    let prom1 = await promise1
//    let prom2 = await promise2
//    let promResult = prom1 + prom2
//    return promResult
// };

//Sleep
// export async function sleep(millis: number): Promise<void> {
//     let prom:Promise<void>  = new Promise((resolve)=> {
//         setTimeout(()=> resolve(), millis )
//     })
//     return prom

// }

//timeout cancellation

// export function cancellable(fn, args, t): Function {
//     let timer = setTimeout(fn, t, ...args)
//     return () => clearTimeout(timer)

// }

//Interval Camcellation
// export function cancellable(fun, args, t: number): Function {
//     fun(...args)
//     const interval = setInterval(() => fun(...args), t)
//     return () => clearInterval(interval)
    
// };

//Promise Time limit
// export function timeLimit(fn , t: number){
    
//     return async function (...args) {

//         return new Promise((resolve, reject) => {
//             const timeoutID = setTimeout(reject, t, 'Time Limit Exceeded');
//             fn(...args)
//                 .then(resolve)
//                 .catch(reject)
//                 .finally(() => clearTimeout(timeoutID));
//         });
//     }
// };

//Cache with time limit
// export class TimeLimitedCache {
    
//     private cache;
//    private timeOutCache;
//    constructor() {
//        this.cache = {}
//        this.timeOutCache = {}
//    }
   
//    set(key: number, value: number, duration: number): boolean {
//        let cacheKeyExists = false;
//        if(this.cache[key]) {
//            cacheKeyExists = true;
//            clearTimeout(this.timeOutCache[key]);
//        }
//        this.cache[key] = value; 
//        const timeoutId = setTimeout(()=>{
//            delete this.cache[key];
//        },duration);

//        this.timeOutCache[key] = timeoutId;
      
//       return cacheKeyExists;
//    }
   
//    get(key: number): number {
//        return this.cache[key] || -1;
//    }
   
//    count(): number {
//        return Object.keys(this.cache).length;
//    }
// }

//execute asynchronus functions in paralel
// type Fn<T> = () => Promise<T>

// export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
//     return new Promise((resolve, reject) => {
//         let results = new Array(functions.length)
//         let count = functions.length

//         for (let i = 0; i < functions.length; i++) {
//             functions[i]().then(res => {
//                 results[i] = res
//                 count--
//                 if (count === 0) {
//                      resolve(results)
//                 }
//             }).catch(error =>
//                 reject(error))
//         }
//     })
// };

//is object empty
// export function isEmpty(obj: Obj): boolean {
//     if (Object.keys(obj).length == 0){
//         return true
//     }else{
//         return false
//     }
// }


//Chunk Array
// type T= any
// export function chunk(arr, size) {
//     let result:Array<T> = [];
//     let array = 0
//     for(let i = 0; i < arr.length; i = i + size) {
//         result[array] = arr.slice(i, i+size)
//        array++
//     }

//     return result
// };

//Array Prototype Last
// declare global {
//     interface Array<T> {
//         last(): T | -1;
//     }
// }

// Array.prototype.last = function() {
//     if (this.length > 0) {
//         return this[this.length - 1];
//       } else {
//         return -1;
//       }
// }

// export const arr = [1, 2, 3];
// arr.last(); // 3
// export {}

//Group By
// declare global {
//     interface Array<T> {
//         groupBy(fn: (item: T) => string): Record<string, T[]>
//     }
// }

// Array.prototype.groupBy = function(fn) {
//     const newObject = {};
//     for(let i of this) {

//         const key = fn(i);

//         if(!newObject[key]){
//             newObject[key]=[];
//         }
    
//         newObject[key].push(i);
//     }
    
//     return newObject;
// }


// export const array = [
//     {"id":"1"},
//     {"id":"1"},
//     {"id":"2"}
//   ], 
//   fn = function (item) { 
//     return item.id; 
//   }
// export{}

//Sort By

// export function sortBy(arr, fn) {
//     return arr.sort((a, b) => fn(a) - fn(b))
// };

//Join Two Arrays by ID//??????????????????????????????????????????????????????????????
// Даны два массива arr1 и arr2, верните новый массив joinedArray. Все объекты в каждом из двух входных массивов будут содержать поле id с целочисленным значением. joinedArray - это массив, сформированный путем объединения arr1 и arr2 на основе их ключа id. Длина joinedArray должна быть равна длине уникальных значений id. Возвращаемый массив должен быть отсортирован по возрастанию на основе ключа id.

// Если данное id существует в одном массиве, но не в другом, единственный объект с этим id должен быть включен в результат без изменений.

// Если два объекта имеют общий id, их свойства должны быть объединены в один объект:

// Если ключ существует только в одном объекте, эту единственную пару ключ-значение следует включить в объект.
// Если ключ включен в оба объекта, значение в объекте из arr2 должно переопределить значение из arr1.
// function join(arr1, arr2) {
//     let i = 0
//     let j = 0
//     const result = []
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i].id < arr2[j].id) {
//             result.push(arr1[i]);
//             i++;
//         }
//     }
// }


//Compact Object
// function compactObject(obj: Obj): Obj {
    
// };

//Array Wrapper
// export class ArrayWrapper {
    
//     private nums: number[];
  
//     constructor(nums: number[]) {
//       this.nums = nums;
//     }
  
//     valueOf(): number {
//       return this.nums.reduce((acc, curr) => acc + curr, 0);
//     }
  
//     toString(): string {
//       return JSON.stringify(this.nums);
//     }
//   }
//   import { ArrayWrapper } from "./createFunction";
 
// const obj1:Array[] = new ArrayWrapper([1, 2]);
//   const obj3:ArrayWrapper = new ArrayWrapper([3, 4]);//ошибка Operator '+' cannot be applied to types 'import("/Users/pruteanukady/Desktop/TypeSript/src/createFunction").ArrayWrapper' and 'import("/Users/pruteanukady/Desktop/TypeSript/src/createFunction").ArrayWrapper'.
// console.log(obj1 + obj3); // 10
// console.log(String(obj1)); // "[1,2]"
// console.log(String(obj3)); // "[3,4]"

//Calculator with Method Chaining
class Calculator {
    num:number;
    constructor(value: number) {
        this.num=value
    }
    
    add(value: number): Calculator {
         this.num= this.num+value
         return this
    }
    
    subtract(value: number): Calculator {
        this.num= this.num-value
         return this
    }
    
    multiply(value: number): Calculator {
        this.num= this.num*value
         return this
    }
    
    divide(value: number): Calculator {
        if(value)
       { this.num= this.num/value
         return this}
         else{
throw new Error("Division by zero is not allowed") 
         }
    }
    
    power(value: number): Calculator {
        this.num= this.num**value
         return this
    }
    
    getResult(): number {
         return this.num
    }
}