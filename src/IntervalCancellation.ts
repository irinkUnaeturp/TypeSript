type Fn = (...args: JSONValuee[]) => void

export function cancellable(fun: Fn, args: JSONValuee[], t: number): Function {
    const interval = setInterval(() => 
        fun(...args), t)
    return () => 
        clearInterval(interval)
    
};