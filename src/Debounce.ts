type A = (...args: string[]) => void

export function debounce(fn: A, t: number): A {
    let timer;
    return (...args) => {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn(...args), t);
    }
};

// import { debounce } from "./Debounce";

// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms
