type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P) {
    let result: number = 0
   result += await promise1
   result += await promise2
return result 
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4
