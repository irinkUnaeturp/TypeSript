type JSONValue = number;
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;
declare function once(fn: Function): OnceFn;
declare let fn: (a: any, b: any, c: any) => any;
declare let onceFn: OnceFn;
