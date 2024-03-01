//type JSONValue =  number 
type OnceFn = (...args: JSONValuee[]) => JSONValuee | undefined

function once(f: Function): OnceFn {
   
        let i = 1;
        return function (...args) {
            if (i) {
               i = 0;
                return (f(...args))
            }
        };
    }
    


 let f = (a,b,c) => (a + b + c)
 let onceFn = once(f)

 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn
