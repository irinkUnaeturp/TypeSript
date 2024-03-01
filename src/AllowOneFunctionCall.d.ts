type JSONValuee = number;
type OnceFn = (...args: JSONValuee[]) => JSONValuee | undefined;
declare function once(fn: Function): OnceFn;
declare let fn: (a: any, b: any, c: any) => any;
declare let onceFn: OnceFn;
