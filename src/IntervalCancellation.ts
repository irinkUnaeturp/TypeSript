type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

export function cancellable(fun: Fn, args: JSONValue[], t: number): Function {
    fun(...args)
    const interval = setInterval(() => 
    fun(...args), t)
    return () => 
    clearInterval(interval)
    
};
const result: { time: number; returned: number; }[] = [];
const fun = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;
const start = performance.now();
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fun(argsArr) });
}

const cancel = cancellable(log, args, t);
setTimeout(cancel, cancelTimeMs);
setTimeout(() => {
    console.log(result); // [
    //     {"time":0,"returned":8},
    //     {"time":36,"returned":8},
    //     {"time":71,"returned":8},
    //     {"time":107,"returned":8},
    //     {"time":143,"returned":8},
    //     {"time":180,"returned":8}
    // ]
}, cancelTimeMs + t + 15) 