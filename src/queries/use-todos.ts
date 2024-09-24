import type { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = (await response.json()) as Todo[];
  return result;
};

export const useTodos = () =>
  useQuery({ queryKey: ["todos"], queryFn: getTodos });
