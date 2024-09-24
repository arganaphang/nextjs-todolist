import type { User } from "@/types/user";
import {
  type AccessorKeyColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<User>();
export const columns: AccessorKeyColumnDef<
  User,
  // biome-ignore lint/suspicious/noExplicitAny: it's okay
  any
>[] = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("username", {
    header: "Username",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("website", {
    header: "Website",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("company.name", {
    header: "Company",
    cell: (info) => info.getValue(),
  }),
];
