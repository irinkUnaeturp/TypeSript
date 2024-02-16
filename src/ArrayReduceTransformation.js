//Array Reduce Transformation
let nums = [1,2,3,4] 
let fn = function sum(accum, curr) { return accum + curr; } 
let init = 0

let reduce = function() {
    if(nums.length === 0) return init;
    let val = 0;
    for(let i = 0;i < nums.length;i++){
        if(i === 0) val = fn(init,nums[i]);
        else val = fn(val,nums[i]); 
  }
  return val
};

console.log(reduce(nums, fn, init))
