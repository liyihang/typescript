type promiseFuncType = (resolve: string, reject: string) => any

let promiseFunc: promiseFuncType = function (resolve, reject): void {

  console.log(resolve, reject);
}
console.log('------------');
promiseFunc('sucess', 'reject')
console.log('------------');

class Promise {
  constructor(promiseFunc: promiseFuncType) {
    promiseFunc('sucess', 'reject')
  }
}

let promise = new Promise(function (resolve, reject): void {
  console.log(resolve, reject);

})

export { }