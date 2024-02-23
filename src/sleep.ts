export async function sleep(mills: number): Promise<void> {
   return new Promise((resolve) => setTimeout(resolve, mills))
}
/*import { sleep } from './sleep';
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t));*/