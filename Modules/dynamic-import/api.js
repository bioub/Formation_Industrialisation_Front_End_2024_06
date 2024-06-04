const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

/**
 * @typedef {object} Todo
 * @property {number} todo.id
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @typedef {object} TodoWithoutId
 * @property {string} todo.title
 * @property {boolean} todo.completed
 */

/**
 * @returns {Promise<Todo[]>}
 */
export async function fetchTodos() {
  const res = await fetch(apiBaseUrl + "/todos");
  return await res.json();
}
