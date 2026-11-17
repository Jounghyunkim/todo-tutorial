"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";

interface TodoSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function TodoSearch({ value, onChange }: TodoSearchProps) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon
        aria-hidden
        weight="bold"
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-foreground/40"
      />
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="제목으로 검색"
        aria-label="검색"
        className="h-10 rounded-xl border-0 bg-black/6 pl-9 text-sm shadow-none dark:bg-white/10"
      />
    </div>
  );
}
