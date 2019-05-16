function f1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("f1 done");
      resolve();
    }, 1000);
  });
}
function f2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("f2 done");
      resolve();
    }, 700);
  });
}
function f3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("f3 done");
      resolve();
    }, 500);
  });
}

const AsyncTaskQueue = require("../dist/index.umd");
const asyncTaskQueue = new AsyncTaskQueue();

asyncTaskQueue
  .add(f1)
  .add(f2)
  .add(f3);
