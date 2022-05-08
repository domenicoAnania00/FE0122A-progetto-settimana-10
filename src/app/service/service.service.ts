import { TodoInterface } from 'src/app/interface/todo-interface';

let todos: TodoInterface[] = [];
export function get(): Promise<TodoInterface[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}
export function add(todo: Omit<TodoInterface, 'id'>): Promise<TodoInterface> {
  return new Promise((res, rej) => {

      const newTodo: TodoInterface = { ...todo, id: todos.length + 1 };
      todos.push(newTodo)
      res(newTodo);

  });
}

export function update(newTodo: Partial<TodoInterface>, id: number): Promise<TodoInterface> {
  return new Promise((res, rej) => {
      todos = todos.map((todo) =>
        todo.id == id ? { ...todo, ...newTodo } : todo
      );
      const updatedTodo = todos.find((todo) => todo.id == id);
      if (updatedTodo) {

  res(updatedTodo);
      } else {
        rej('todo non trovato');
      }
  });
}
