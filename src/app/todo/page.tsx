"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/datatable";
import { useTodos } from "@/queries/use-todos";
import { columns } from "./column";

export default function Home() {
  const { data, isLoading, isError } = useTodos();
  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <div className="px-16 py-8 flex flex-col items-start gap-8">
      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
