type OnceFn = (...args: JSONValuee[]) => JSONValuee | undefined;
declare function once(f: Function): OnceFn;
declare let f: (a: any, b: any, c: any) => any;
declare let onceFn: OnceFn;
