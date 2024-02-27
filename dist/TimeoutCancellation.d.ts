type JSONValue = null | boolean | number | string | JSONValue[] | {
    [key: string]: JSONValue;
};
type Fn = (...args: JSONValue[]) => void;
export declare function cancellable(fn: Fn, args: JSONValue[], t: number): Function;
export {};
