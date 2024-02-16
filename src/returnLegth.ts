type JSONValuee = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let arr = args.length
    return arr
};
console.log(argumentsLength(1, 2, 3))
