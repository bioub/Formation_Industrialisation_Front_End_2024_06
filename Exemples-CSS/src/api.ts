import config from "./config.json";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoWithoutId = Omit<Todo, "id">;

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(config.apiBaseUrl + "/todos");
  return await res.json();
}

export async function postTodo(todoDto: TodoWithoutId): Promise<Todo> {
  const res = await fetch(config.apiBaseUrl + "/todos", {
    method: "POST",
    body: JSON.stringify(todoDto),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await res.json();
}
