import type { Todo } from "@/types/todo";
import {
  type AccessorKeyColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<Todo>();
export const columns: AccessorKeyColumnDef<
  Todo,
  // biome-ignore lint/suspicious/noExplicitAny: it's okay
  any
>[] = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("userId", {
    header: "User ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("completed", {
    header: "Completed",
    cell: (info) => (
      <>
        {info.getValue() ? (
          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
            Completed
          </span>
        ) : (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
            Not completed
          </span>
        )}
      </>
    ),
  }),
];
