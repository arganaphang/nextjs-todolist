"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-end items-center px-16 py-8 gap-4">
      <Link
        href="/todo"
        className={cn("hover:underline", {
          "underline font-semibold": pathname.startsWith("/todo"),
        })}
      >
        Todo
      </Link>
      <Link
        href="/user"
        className={cn("hover:underline", {
          "underline font-semibold": pathname.startsWith("/user"),
        })}
      >
        User
      </Link>
    </nav>
  );
}
