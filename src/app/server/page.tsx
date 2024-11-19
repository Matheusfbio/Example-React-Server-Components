import { ClientComponent } from "../components/ClientComponents";
import { ServerComponent } from "../components/ServerComponents";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function ServerPage() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as any[]);

  console.table("server");

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}> {todo.title}</li>
      ))}

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </>
  );
}
