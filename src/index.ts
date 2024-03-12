import { debounce } from "./Debounce";

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
