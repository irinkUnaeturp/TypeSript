async function sleep(mills: number): Promise<void>{
//let result = await mills
//console.log(result)
let promise = new Promise((resolve) => {
    setTimeout(() => resolve, mills)
    })
    let result = await promise
    
      console.log(result)
}
let t = Date.now()
sleep(100).then(()=> console.log(Date.now() - t))// 100