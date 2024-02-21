export async function sleep(mills: number): Promise<void> {
  let promise = new Promise((resolve) => {setTimeout(() => resolve, mills)})
 let result = await promise
 console.log(result)
}