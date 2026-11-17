"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { SegmentButton, SegmentGroup } from "@/components/segmented";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <SegmentGroup aria-label="정렬">
      {SORT_OPTIONS.map((item) => (
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
