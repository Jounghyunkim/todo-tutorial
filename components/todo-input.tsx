"use client";

import { useState } from "react";
import { PlusIcon } from "@phosphor-icons/react";
import {
  CATEGORIES,
  DEFAULT_PRIORITY,
  PRIORITIES,
  type Category,
  type Priority,
} from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentButton, SegmentGroup } from "@/components/segmented";

// 옵션 한 줄: 왼쪽 라벨 + 컨트롤
function OptionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-12 shrink-0 text-[0.6875rem] font-semibold text-foreground/50">
      {children}
    </span>
  );
}

interface TodoInputProps {
  onAdd: (
    text: string,
    priority: Priority,
    dueDate?: string,
    category?: Category
  ) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState<Priority>(DEFAULT_PRIORITY);
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState<Category | undefined>(undefined);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // 빈/공백 입력이면 추가하지 않고 선택값(우선순위·마감일·카테고리)도 유지한다.
    if (!value.trim()) return;
    onAdd(value, priority, dueDate || undefined, category);
    setValue("");
    setPriority(DEFAULT_PRIORITY);
    setDueDate("");
    setCategory(undefined);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2.5 border-t border-black/5 bg-white/75 px-4 pt-3 pb-4 backdrop-blur-2xl sm:pb-7 dark:border-white/10 dark:bg-neutral-900/75"
    >
      <div className="flex items-center gap-2">
        <OptionLabel>우선순위</OptionLabel>
        <SegmentGroup aria-label="우선순위">
          {PRIORITIES.map((item) => (
            <SegmentButton
              key={item.value}
              selected={item.value === priority}
              onClick={() => setPriority(item.value)}
            >
              {item.label}
            </SegmentButton>
          ))}
        </SegmentGroup>
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="마감일"
          className="h-8 min-w-0 flex-1 rounded-full border-0 bg-black/6 px-3 text-xs shadow-none dark:bg-white/10"
        />
      </div>

      <div className="flex items-center gap-2">
        <OptionLabel>카테고리</OptionLabel>
        <SegmentGroup aria-label="카테고리">
          <SegmentButton
            selected={category === undefined}
            onClick={() => setCategory(undefined)}
          >
            없음
          </SegmentButton>
          {CATEGORIES.map((item) => (
            <SegmentButton
              key={item.value}
              selected={item.value === category}
              onClick={() => setCategory(item.value)}
            >
              {item.label}
            </SegmentButton>
          ))}
        </SegmentGroup>
      </div>

      <div className="flex items-center gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="새로운 할 일을 입력하고 Enter"
          aria-label="새 할 일"
          className="h-11 flex-1 rounded-full border-0 bg-black/6 px-4 text-sm shadow-none dark:bg-white/10"
        />
        <Button
          type="submit"
          size="icon"
          aria-label="추가"
          className="size-11 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/40 hover:from-blue-500/90 hover:to-indigo-600/90"
        >
          <PlusIcon weight="bold" className="size-5" />
        </Button>
      </div>
    </form>
  );
}
