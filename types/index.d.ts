export default class TaskQueue {
  add(fn: Function): TaskQueue;
  taskList: Array<{
    fn: Function;
    processing: boolean;
  }>;
}
