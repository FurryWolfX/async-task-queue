export interface Task {
  fn: Function;
  processing: boolean;
}

export default class TaskQueue {
  add(fn: Function): TaskQueue;
  taskList: Array<Task>;
}
