import type { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = (await response.json()) as User[];
  return result;
};

export const useUsers = () =>
  useQuery({ queryKey: ["users"], queryFn: getUsers });
