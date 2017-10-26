import {num, foo} from './test';
import {bar} from './testts';
import _ from 'lodash';
import style from '../style/main.sass';


console.log(num);

foo(2);
foo(3);
console.log('123');
console.log('123');

bar(2);
bar(3);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = _.filter(arr, (item) => item<5);
console.log(newArr);

let arrNew = _.filter(arr, (x) => x > 1);

console.log(arrNew);