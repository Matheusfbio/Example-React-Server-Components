"use client";

import { useEffect, useState } from "react";

export default function ClientPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [todos, setTodos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [getError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response.json();
      setTodos(todos);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.table("client");

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <h1>Loading....</h1>;
  if (getError) return <h1>{getError}</h1>;

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}
