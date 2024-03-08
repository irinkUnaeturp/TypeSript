import { TimeLimitedCache } from "./Cache";

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1))// 42
console.log(timeLimitedCache.count()) // 1
