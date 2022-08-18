import MyLocalStorage from './app';

let ls = new MyLocalStorage()
ls.setItem('keys', { name: 'zs', age: 30 })
console.log(ls)