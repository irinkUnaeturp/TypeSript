let nums : number[]=[3,2,2,3]
const value : number=3
function removeElement(nums: number[], val: number): number {
    let k = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i-- 
        }
        k++
    }
    return k
};
console.log(removeElement([3,2,2,3],3))
console.log(nums)
