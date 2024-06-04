
export async function postTodo(todoDto) {
    const res = await fetch(apiBaseUrl + "/todos", {
      method: "POST",
      body: JSON.stringify(todoDto),
      headers: {
        "Content-type": "application/json",
      },
    });
  
    return await res.json();
  }
  