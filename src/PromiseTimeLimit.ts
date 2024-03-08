type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        const timeoutPromise = new Promise((res, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t)
        })
        const result = await Promise.race([
            timeoutPromise,
            fn(...args)
        ])
        return result
    }

}

/*import { timeLimit } from "./PromiseTimeLimit";

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms*/