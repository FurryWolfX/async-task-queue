# 为 nodejs 实现了一个简易的异步任务队列管理

异步方可以在任何时候添加到队列中，队列会按照添加的顺序依次执行。

注意：方法必须返回一个 `Promise`。

# This is a single async task queue manager for nodejs

This is a single async task queue manager for nodejs, you can add async functions to the TaskQueue at any time.
Functions will run one by one.

# Example

```javascript
function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("f1 done");
      try {
        a(); // error
        resolve();
      } catch (e) {
        reject(e);
      }
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

const AsyncTaskQueue = require("@wolfx/async-task-queue");
const asyncTaskQueue = new AsyncTaskQueue();

asyncTaskQueue
  .add(f1)
  .add(f2)
  .add(f3);
```
