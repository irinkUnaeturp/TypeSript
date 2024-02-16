let functions = [x => x + 1, x=> x * x, x=> 2 * x]
let x = 4

var compose = function() {
    return function(x) {
      return functions.reduceRight(function(acc, fn) {
        return fn(acc);
      }, x);
    }
  };
  const fn = compose([x => x + 1, x => 2 * x])
  fn(4) // 9
  console.log(compose(functions))
