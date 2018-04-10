import sub , {square, add} from './utils.js';
import isSenior, {isAdult, canDrink} from './person.js';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is Here!!!');
console.log(square(6));
console.log(add(100, 223));
console.log(sub(100, 23));

console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(64));

const template = <p>This is JSX run from webpack</p>

ReactDOM.render(template, document.getElementById('app'));