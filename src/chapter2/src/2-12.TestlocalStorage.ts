import MyLocalStorage from './2-11.localStorage';

let ls = new MyLocalStorage()
ls.setItem('keys', { name: 'zs', age: 30 })
console.log(ls)