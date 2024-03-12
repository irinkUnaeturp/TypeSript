type Fn<T> = () => Promise<T>

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length)
        let count = functions.length

        for (let i = 0; i < functions.length; i++) {
            functions[i]().then(res => {
                results[i] = res
                count--
                if (count === 0) {
                     resolve(results)
                }
            }).catch(error =>
                reject(error))
        }
    })
}

// import { promiseAll } from "./asynchronusFunction";

// const promise = promiseAll([() => new Promise(res => res(42))])
// promise.then(console.log); // [42]
