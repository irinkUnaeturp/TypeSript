type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]
const obj = {}
const obj2 = {"x": 5, "y": 42}
function isEmpty(obj: Obj): boolean {
    if (Object.keys(obj).length == 0){
        return true
    }else{
        return false
    }
}
console.log(isEmpty(obj))
console.log(isEmpty(obj2))