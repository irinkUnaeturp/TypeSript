export class TimeLimitedCache {
    private cache;
    private timeOutCache;
    constructor() {
        this.cache = {}
        this.timeOutCache = {}
    }
    
    set(key: number, value: number, duration: number): boolean {
        let cacheKeyExists = false;
        if(this.cache[key]) {
            cacheKeyExists = true;
            clearTimeout(this.timeOutCache[key]);
        }
        this.cache[key] = value; 
        const timeoutId = setTimeout(()=>{
            delete this.cache[key];
        },duration);

        this.timeOutCache[key] = timeoutId;
       
       return cacheKeyExists;
    }
    
    get(key: number): number {
        return this.cache[key] || -1;
    }
    
    count(): number {
        return Object.keys(this.cache).length;
    }
}