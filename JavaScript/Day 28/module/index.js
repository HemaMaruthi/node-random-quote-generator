// console.log("Welcome to module.js")

// import {name} from './src/App.js';
// import {greet} from './src/App.js'

import {name,greet} from './src/App.js';

// import{name as call,accountNumber,balanceCheck} from './src/Account.js'
import * as account from './src/Account.js'


console.log(name);
greet()

// console.log(call)
console.log(account.name)

console.log(account.accountNumber);
account.balanceCheck()