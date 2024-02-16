let nums4:number[]=[3,2,3]
function majorityElement(nums: number[]):number {
    nums.sort((a,b)=> a-b);
    let temp = nums[0];
    let count = 1;
    for(let i = 1; i< nums.length; i++) {
        if(nums[i] === temp) {
            count++;
        } else {
            count = 1;
            temp = nums[i];
        }
        if(count > nums.length / 2) return nums[i];
    }
    return temp
}
console.log(majorityElement([3,2,3]))
