import { sleep } from './sleep';
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t));