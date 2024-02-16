let nums5:number[] = [1,1,1,2,2,3]
function removeDuplicates(nums5: number[]): number {
    let j:number = 2;

    for (let i = 2; i < nums5.length; i++) {
      if (nums5[i] !== nums5[j - 2]) {
        nums5[j++] = nums5[i];
      }
    }
    
    return j;
};

console.log(removeDuplicates([1,1,1,2,2,3]))
