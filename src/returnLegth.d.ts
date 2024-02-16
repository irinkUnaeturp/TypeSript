type JSONValuee = null | boolean | number | string | JSONValue[] | {
    [key: string]: JSONValue;
};
declare function argumentsLength(...args: JSONValue[]): number;
