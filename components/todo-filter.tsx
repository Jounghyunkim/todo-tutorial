"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { SegmentButton, SegmentGroup } from "@/components/segmented";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <SegmentGroup aria-label="필터">
      {TODO_FILTERS.map((item) => (
        <SegmentButton
          key={item.value}
          selected={item.value === value}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </SegmentButton>
      ))}
    </SegmentGroup>
  );
}
