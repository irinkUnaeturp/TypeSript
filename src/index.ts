import { promiseAll } from "./asynchronusFunction";

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
