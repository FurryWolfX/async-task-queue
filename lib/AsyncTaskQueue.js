class AsyncTaskQueue {
  constructor() {
    this.taskList = [];
  }
  /**
   * 添加方法到队列
   * @param fn
   */
  add(fn) {
    this.taskList.push({
      fn,
      processing: false,
    });
    this.loopRun();
    return this;
  }

  /**
   * @returns {Promise<void>}
   */
  loopRun() {
    if (this.taskList.length > 0) {
      const firstTask = this.taskList[0];
      if (firstTask.processing === false) {
        firstTask.processing = true;
        firstTask.fn().then(() => {
          this.taskList.shift();
          this.loopRun();
        }).catch(e => {
          this.taskList.shift();
          this.loopRun();
          throw e;
        });
      }
    }
  }
}

module.exports = AsyncTaskQueue;
module.exports.default = AsyncTaskQueue;
