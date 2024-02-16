
let nums6:number[] = [1,2,3,4,5,6,7]
let k :number = 3
function rotate(nums6: number[], k: number): void {
    const n = nums6.length;
    k %= n; 
    const rotated = nums6.slice(n - k).concat(nums6.slice(0, n - k));
   
  for (let i = 0; i < n; i++) {
      nums6[i] = rotated[i];
    }
  }
  

  rotate(nums6, k);
  console.log(nums6);
